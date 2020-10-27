var inquirer = require("inquirer")
var mysql = require("mysql")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "chefness",
    database: "employeeDb"
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    questions();
  });


function questions(){
    inquirer.prompt({
        type: "list",
        message:"chose",
        choices:["view all employees","add employee", "view departments", "add department","add role","cancel" ],
        name:"choice"
    }).then(answers =>{
        switch(answers.choice){
            case "view all employees":
                employee()
                break;
            case "add employee" :
                addEmployee()
                break;
            case "view departments":
                departments()
                break;
            case "add department":
                addDepartment()
                break;
            case "add role":
                addRole()
                break;
            default:
                connection.end()
                break;                   
        }
    })
}

function employee(){

}
function addEmployee(){

}
function departments(){

}
function addDepartment(){

}

function addRole(){
    
}