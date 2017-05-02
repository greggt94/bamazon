var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    showCatalog();
});

var showCatalog = function() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.log(res);
        buyItem();
    });
};

var buyItem = function() {
    inquirer.prompt({
        name: "itemId",
        message: "Enter the Item ID number of the product you want to purchase: "
    }).then(function(answer) {
        connection.query("SELECT * FROM products WHERE item_id = ?", answer.itemId, function(err, res) {
            if (err) throw err;
            console.log(res);
            customerItem = answer.itemId;
            quantity = res[0].stock_quantity;
            price = res[0].price;
            userCart();
        })
        var userCart = function() {
            inquirer.prompt({
                name: "amount",
                message: "How many would you like to buy: "
            }).then(function(answer) {
                var updatedAmount = quantity - answer.amount;
                if (answer.amount > quantity) {
                    console.log("Insufficient quantity!");
                } else {
                    console.log("Your total price is: " + (answer.amount * price));
                    connection.query("UPDATE products SET stock_quantity = ? WHERE item_id = ?", [updatedAmount, customerItem])
                }
                connection.end();
            });
        };
    });
};
