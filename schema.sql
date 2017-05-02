CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INT auto_increment NOT NULL,
    product VARCHAR(45) NOT NULL,
    department_name VARCHAR (45) NOT NULL,
    price INT NOT NULL,
    stock_quantity INT NOT NULL,
    primary key(item_id)
    );
    
INSERT INTO products (item_id, product, department_name, price, stock_quantity)
VALUES(1, "FSU Shirt", "Clothing", 50, 20),
(2, "FSU Shirt", "Clothing", 40, 10),
(3, "FSU Shirt", "Clothing", 30, 10),
(4, "FSU Shirt", "Clothing", 600, 5),
(5, "FSU Shirt", "Clothing", 1200, 5),
(6, "FSU Shirt", "Clothing", 2000, 10),
(7, "FSU Shirt", "Clothing", 300, 20),
(8, "FSU Shirt", "Clothing", 2500, 10),
(9, "FSU Shirt", "Clothing", 50, 50),
(10, "FSU Shirt", "Clothing", 120, 30);