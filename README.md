# SQLcms-employee-tracker

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  # Table of Contents
  * [Project Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licensing](#license)
  * [Questions](#questions)
  
  <a name="description"></a>
  ## Description
  A CLI application built with MySQL and Node that allows users to view an employee database and update data fields. Also includes ability to delete data and get budget for departments. 

  Relies on OOP to modularize database queries and utilizes different forms of asynchronicity for the sake of practice and smooth UE.

  Room for improvement: can refactor code to make class for index functions, can further refactor by removing recursion of init function. 

  <a name="install"></a>
  ## Installation
  Clone the application, cd into folder, and 'npm i' inquirer, console.table, and mysql2 packages. Initialize the app using command 'node index.js'.

  <a name="usage"></a>
  ## Usage
  Initialize the app and view list options using arrow keys and pressing enter. Exit the app by selecting and pressing exit. Make sure to avoid inputting null data.

```
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
```
Here is a [video]() depicting how the app functions.
Here is how the output looks in the terminal.
![output]()


  <a name="license"></a>
  ## Licensing
  This app is licensed under MIT. For more information, click on the badge link above.

  <a name="questions"></a>
  ## Questions
  You can find more of my work at [rheam97](https://github.com/rheam97)
  on GitHub and contact me with any questions
  at rheam97@gmail.com.

  Repo URL: You can share the repo URL using this [link](https://github.com/rheam97/SQLcms-employee-tracker.git).

