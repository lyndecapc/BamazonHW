// Initializes the npm packages used
var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

// Initializes the connection variable to sync with a MySQL database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "lynde",

  // Your password
  password: "capogrlj54",
  database: "bamazon"
});

// Creates the connection with the server and loads the product data upon a successful connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
  }
  loadProducts();
});

// Function to load the products table from the database and print results to the console
function loadProducts() {
  // Selects all of the data from the MySQL products table
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;

    // Draw the table in the terminal using the response
    console.table(res, "\n");

    // Then prompt the customer for their choice of product, pass all the products to promptCustomerForItem
    promptCustomerForItem();
  });
}

// Prompt the customer for a product ID
function promptCustomerForItem() {
  // Prompts user for what they would like to purchase
 inquirer
 .prompt([
   {
    name: "id",
    type: "input",
    message: "Please enter the item ID of the product you wish to buy.\n",
    validate: function(value) {
      if (!isNaN(value) && value < 11) {
        return true;
      }
      return false;
      }
    },
    {
      // Prompt the customer for a product quantity
      name: "quantity",
      type: "input",
      message: "How many units of the product do you wish to buy?\n",
      validate: function(value) {
      if (!isNaN(value)) {
        return true;
      }
      return false;
    }
      }])
      .then(function(answer) {
          var userId = answer.id;
          var userQuantity = answer.quantity;
          console.log("You chose to buy", userQuantity, "units of item", userId);
        
          
            makePurchase(userId, userQuantity);

          });
      };
    

// Purchase the desired quantity of the desired item
function makePurchase(userId, userQuantity) {
  connection.query("SELECT * FROM products WHERE item_id = " + userId, function(err, res) {
    if (err) throw err;
    if (userQuantity <= res[0].stock_quantity) {
    var totalCost = res[0].price * userQuantity;
    console.log("Your items are in stock!");
    console.log("Your total cost for " + userQuantity + " " + res[0].product_name + " is " + totalCost + " Thank you!");

    var updateStock = "UPDATE products SET stock_quantity = " + (res[0].stock_quantity - userQuantity) + " WHERE item_id = " + userId;

    connection.query(updateStock, function() {
      if (err) throw err;
    })
  
  }
  else {
			console.log("Insufficient quantity, sorry we do not have enough " + res[0].product_name + " to complete your order.");
    }
    
    loadProducts();
  
  });




// Check to see if the user wants to quit the program
function quit(choice) {
  if (choice === "q") {
    // Log a message and exit the current node process
    console.log("Goodbye!");
    process.exit(0);
  }
}
}