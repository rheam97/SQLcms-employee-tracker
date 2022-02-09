const inquirer = require('inquirer')
const mysql2 = require('mysql2/promise')
const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employees'
})


// launch inquirer prompts
// list to either view departments, roles, employees, or add them
// function for each
// when viewing department: function console logs department table
// for adding: function asks for input with inquirer and adds input to db