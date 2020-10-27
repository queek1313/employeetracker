var inquirer = require("inquirer")
var mysql = require("mysql")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "chefness",
    database: "employeeDb"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    questions();
});


function questions() {
    inquirer.prompt({
        type: "list",
        message: "Select",
        choices: ["view all employees", "add employee", "view departments", "add department", "add role", "view role", "cancel"],
        name: "choice"
    }).then(answers => {
        switch (answers.choice) {
            case "view all employees":
                employee()
                break;
            case "add employee":
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
            case "view role":
                viewRole()
                break;
            default:
                connection.end()
                break;
        }
    })
}

function employee() {
    connection.query("SELECT * FROM employee", function (err, res) {
        console.table(res);
        questions();
    })

}
function addEmployee() {
    inquirer.prompt([{
        type: "input",
        message: "Employee first name:",
        name: "firstName"
    },
    {
        type: "input",
        message: "Employee last name:",
        name: "lastName"
    },
    {
        type: "number",
        message: "employee role id:",
        name: "idRole"
    },
    {
        type: "number",
        message: "manager id:",
        name: "idManager"
    }
    ]).then(function (res) {
        connection.query("INSERT INTO employee(first_name,last_name,role_id,manager_id) VALUES (?,?,?,?)", [res.firstName, res.lastName, res.idRole, res.idManager], function (err, res) {
            if (err) throw err;
            questions();
        })
    })

}
function departments() {
    connection.query("SELECT * FROM department", function (err, res) {
        console.table(res);
        questions();
    })

}
function addDepartment() {
    inquirer.prompt([{
        type: "input",
        message: "Department:",
        name: "departmentName"
    },

    ]).then(function (res) {
        connection.query("INSERT INTO department (name) VALUES (?)", [res.departmentName], function (err, res) {
            if (err) throw err;
            console.table("complete");
            questions();
        })
    })
}

function addRole() {
    inquirer.prompt([{
        type: "input",
        message: "title:",
        name: "title"
    },
    {
        type: "number",
        message: "salary:",
        name: "salary"
    },
    {
        type: "number",
        message: "department id:",
        name: "departmentId"
    },
    ]).then(function (res) {
        connection.query("INSERT INTO role (title,salary,department_id) VALUES (?,?,?)", [res.title, res.salary, res.departmentId], function (err, res) {
            if (err) throw err;
            questions();
        })
    })

}

function viewRole() {
    connection.query("SELECT * FROM role", function (err, res) {
        console.table(res);
        questions();
    })

}