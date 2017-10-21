var inquirer = require("inquirer");
var mysql = require("mysql"); 

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

   user: '',
    password: '',
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
/*  connection.query("select * from products", function(err, results){
    if(err){throw err;}

   console.log(results);

    var resultsArray = [];
     for (var i = 0; i < results.length; i++) {
        resultsArray[i] = results[i].names;
     };

   inquirer.prompt([
      {
        type: "list",
        name: "options",
        message: "Here are your options",
        choices: [resultsArray[0], resultsArray[1], resultsArray[2]]
      }
    ]).then(function(answers) {
      console.log("I'm working")
      for (var i = 0; i < results.length; i++) {
        if (results[i].names === answers.options) {
          compareBids(results[i].id, results[i].price)
        };
      };
    });
  });
}
*/
var askUser = function() {
	inquirer.prompt([
      {
        name: "userChoice",
        message: "Which item do you wish to purchase?"
      }
    ]).then(function(answers) {

   console.log("I'm working");
   console.log(answers.userChoice);
  switch(answers.userChoice) {
  	case '1':
  		id = 1;
  		console.log(id);
  		break;
  	case '2':
  		id = 2;
  		console.log(id);
  		break;
  	case '3':
  		id = 3;
  		console.log(id);
  		break;
  	case '4':
  		id = 4;
  		console.log(id);
  		break;
  	case '5':
  		id = 5;
  		console.log(id);
  		break;
  	case '6':
  		id = 6;
  		console.log(id);
  		break;
  	case '7':
  		id = 7;
  		console.log(id);
  		break;
  	case '8':
  		id = 8;
  		console.log(id);
  		break;
  	case '9':
  		id = 9;
  		console.log(id);
  		break;
  	case '10':
  		id = 10;
  		console.log(id);
  		break;
  	default:
  		console.log("Invalid input");
  		break;
  }
   
})
}