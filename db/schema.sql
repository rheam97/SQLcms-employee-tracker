DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS department;

CREATE TABLE department(
department_id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
name VARCHAR(30)
);

CREATE TABLE role(
role_id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
title VARCHAR(30),
salary DECIMAL,
department_id INTEGER,
CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(department_id)
);

CREATE TABLE employee(
employee_id INTEGER  AUTO_INCREMENT PRIMARY KEY NOT NULL,
first_name VARCHAR(30),
last_name VARCHAR(30),
manager_id INTEGER,
role_id INTEGER,
CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(role_id),
CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(employee_id) 
);