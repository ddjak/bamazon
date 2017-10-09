DROP DATABASE IF EXISTS bamazon;

create database bamazon;

use bamazon;

create table products(
item_id INTEGER(11) auto_increment not null,
product_name varchar(50) not null,
department_name varchar(50) not null,
price float(10) not null,
stock_quantity int(11) not null,
primary key (item_id)
);

INSERT INTO products VALUES (1, "sock", "clothing", 2.50, 10), (2, "shirt", "clothing", 10.00, 40), (3, "star wars", "movies", 20.00, 10);
INSERT INTO products VALUES (4, "duke nukem", "video games", 30.00, 3), (5, "rake", "gardening", 10.00, 500);
INSERT INTO products VALUES (6, "soda", "food and beverages", 1.00, 60), (7, "toilet", "home", 50.00, 20);
INSERT INTO products VALUES (8, "poster", "decoration", 3.40, 100), (9, "The Shining", "books", 10.00, 30);
INSERT INTO products VALUES (10, "Runaway - Kanye West", "music", 1.99, 1000);

select*from products;

