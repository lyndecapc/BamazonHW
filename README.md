# BamazonHW

https://github.com/lyndecapc/BamazonHW

The Bamazon application is a simple Amazon-like storefront that uses the command line interface with NPM inquirer, MySQL, and Node.js

*MySQL Database Setup

In order to run this application, you should have the MySQL database already set up on your machine. If you don't, visit the MySQL installation page to install the version you need for your operating system. Once you have MySQL installed, you will be able to create the Bamazon database and the products table with the SQL code found in schema.sql. Run this code inside your MySQL client like MySQL Workbench to populate the database, then you will be ready to proceed with running the Bamazon customer interface.

*Customer Interface

The customer interface allows the user to view the current inventory of store items: item IDs, descriptions, department in which the item is located and price. The user is then able to purchase one of the existing items by entering the item ID and the desired quantity. If the selected quantity is currently in stock, the user's order is fulfilled, displaying the total purchase price and updating the store database. If the desired quantity is not available, the user is prompted to modify their order.

To run the customer interface please follow the four steps below:

1. git clone git@github.com:lyndecapc/BamazonHW.git
2. cd bamazon
3. npm install
4. node bamazonCustomer-Template.js

*Manager Interface

At this time, the Manager interface is still a work in progress. 

*Bamazon Demo

You can watch the demo of the Bamazon customer interface at the link below.  

https://drive.google.com/file/d/1jMRLVXh5h83VwvlmDcoafVJFJ550iB5J/view
