var inquirer = require("inquirer");
var mysql = require("mysql"); 

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

   user: 'root',
    password: 'Le0nard0DaV!nc1',
    database: 'bamazon'
});

connection.connect(function(err){
  if(err){throw err;}
  console.log("connected as id " + connection.threadId);
  printProducts();
  askUser();
});

var printProducts = function() {
	connection.query("select * from products", function(err, results){
    if(err){throw err;}
   console.log(results);
});
}
/*
var askUser = function() {
	inquirer.prompt([
      {
        name: "userChoice",
        message: "Which item do you wish to purchase?"
      }
    ]).then(function(answers) {

   console.log("I'm working");
   console.log(answers.userChoice);
  
   
}
} */