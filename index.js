var inquirer = require("inquirer")
var mysql = require("mysql")





function questions(){
    inquirer.prompt({
        type: "list",
        message:"chose",
        choices:["view all employees","add employee", "view departments", "add department","add role","cancel" ],
        name:"choice"
    }).then

}