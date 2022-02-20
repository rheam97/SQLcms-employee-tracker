-- Department values--
INSERT INTO department (name)
VALUE ("Sales");
INSERT INTO department (name)
VALUE ("Engineering");
INSERT INTO department (name)
VALUE ("Finance");
INSERT INTO department (name)
VALUE ("Legal");

-- role values -------
INSERT INTO role (title, salary, department_id)
VALUE ("Lead Engineer", 150000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Legal Team Lead", 250000, 4);
INSERT INTO role (title, salary, department_id)
VALUE ("Accountant", 125000, 3);
INSERT INTO role (title, salary, department_id)
VALUE ("Sales Lead", 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Salesperson", 80000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Software Engineer", 120000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Lawyer", 190000, 4);

-- employee values -------
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Jessica", "Haze", null, 1);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Tiffany", "Patric", null, 2);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Mia","Lam",null,3);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Bently", "Lao", 1, 4);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Chris", "Melby", 4, 5);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Jason", "Baker", 1, 6);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Tom", "Nice", 2, 7);



DELETE FROM employee WHERE employee_id=?
DELETE FROM department WHERE department.department_id=?
DELETE FROM role WHERE role.role_id=?

UPDATE employee SET manager_id=? WHERE employee_id =?


SELECT count(*) as staff_count, sum(role.salary) as budget, department.name as department 
from employee
left join role on employee.role_id=role.role_id
left join department on role.department_id=department.department_id
group by department

--you want to get all the employees that serve a role in a partivular dept
SELECT employee.employee_id, employee.first_name, employee.last_name, department.name as department
from employee
LEFT JOIN role on employee.role_id=role.role_id
left join department on role.department_id=department.department_id
where department.department_id = ?

--get all managers from depts
SELECT employee.first_name, employee.last_name, department.name as department
from employee
LEFT JOIN role on employee.role_id=role.role_id
left join department on role.department_id=department.department_id
where manager_id IS NOT NULL

