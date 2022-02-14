const inquirer = require('inquirer')
const myemployees = require('./class')
const cTable = require('console.table')

// list to either view departments, roles, employees, or add them/ exit/ delete/ update
        // launch inquirer prompts
function init () {
    inquirer.prompt({
        type: 'list',
        name: 'action',
        choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role', 'Exit']
    }).then(({action})=> {
        switch (action){
            case 'View All Departments':
            myemployees.departments()
                init()
            break;
            case 'View All Roles':
            myemployees.roles()
                init()
            break;
            case 'View All Employees':
            myemployees.employees()
                init()
            break;
            case 'Add a Department':
            addDept()
            break;
            case 'Add a Role':
            addRole()
            break;
            case 'Add an Employee':
            addEmp()
            break;
            case 'Update an Employee Role':
            updateEmp()
            break;
            case 'Exit':
            console.log('Goodbye.')
            return process.exit()
        }
    })
}

// function for each

// when viewing department: function console logs department table

// for adding: function asks for input with inquirer and adds input to db

const addDept = async () => {
    inquirer.prompt({
        type: 'input',
        name: 'deptname',
        message: 'What would you like to name your department?'
    })
       await myemployees.addDepartment(data)
       init()
}

const addRole = async ()=> {
    inquirer.prompt([{
    type: 'input',
    name: 'rolename',
    message: 'What would you like to name the role?'
    },
    {
        type: 'input',
        name: 'salary',
        message: 'What is the salary of this role?',
        validate: (salary)=> {
            if(isNaN(salary)){
                return false
            }
            else{
                return true
            }
        }
    },
    {
        type: 'input',
        name: 'dept',
        message: 'What department is this role a part of?'
    }])
    await myemployees.addRoles(data)
    init()
}

const addEmp = ()=> {
const [role] = 
inquirer.prompt([{
    type: 'input',
    name:'firstname',
    message: "What is the new employee's first name?"
}, {
    type: 'input',
    name:'lastname',
    message: "What is the new employee's last name?"
}, {
    type: 'list',
    name:'role',
    message: "What is the new employee's role",
    choices: []
}, {
    type: 'list',
    name:'manager',
    message: "What is the new employee's first name?",
    choices:[]
}])
}

// const updateEmp = ()=> {

// }
init()