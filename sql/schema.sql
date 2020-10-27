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
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER(10),
    manager_id INTEGER(10)
);