DROP DATABASE IF EXISTS employeeDb;

CREATE DATABASE employeeDb;

USE employeeDb;

CREATE TABLE department(
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    name VARCHAR(30),
    PRIMARY KEY (id)
);
CREATE TABLE role(
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    title VARCHAR(30),
    salary DECIMAL(10.3),
    department_id INTEGER(10),
    PRIMARY KEY (id)
);
CREATE TABLE employee(
    id INTEGER(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER(10),
    manager_id INTEGER(10)
);

INSERT INTO employee(first_name,last_name,role_id,manager_id)
VALUES ("John","Doe",12,123),("Jane","Doe",13,123);

INSERT INTO department(name)
VALUES ("Front Desk"),("House Keeping"),("Sales");

INSERT INTO role(title,salary,department_id)
VALUES ("Director", 50000,1),("Assistant",35000,2)