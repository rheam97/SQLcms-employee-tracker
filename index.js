const inquirer = require('inquirer')
const mysql2 = require('mysql2/promise')
const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employees'
})

db.connect(err=> {
    if(err) throw err
    console.log('Database connected.')})

const init = () => {
    inquirer.prompt({
        // list to either view departments, roles, employees, or add them/ exit/ delete/ update
        // launch inquirer prompts
    })
}



// function for each


// when viewing department: function console logs department table




// for adding: function asks for input with inquirer and adds input to db