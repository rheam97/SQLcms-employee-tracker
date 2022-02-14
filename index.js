const inquirer = require('inquirer')
const myemployees = require('./class')
const cTable = require('console.table')

// list to either view departments, roles, employees, or add them/ exit/ delete/ update
        // launch inquirer prompts
const init = () => {
    inquirer.prompt({
        type: 'list',
        name: 'action',
        choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role', 'Exit']
    }).then(({action})=> {
        switch (action){
            case 'View All Departments':
            myemployees.departments().then({
                init()
            })
            break;
            case 'View All Roles':
            myemployees.roles().then({
                init()
            })
            init()
            break;
            case 'View All Employees':
            myemployees.employees().then({
                init()
            })
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
            return;
        }
    })
}



// function for each


// when viewing department: function console logs department table




// for adding: function asks for input with inquirer and adds input to db

const addDept = () => {
    inquirer.prompt({

    }).then(data=> {
        myemployees.addDepartment(data)
    })
}

const addRole = ()=> {

}

const addEmp = ()=> {
inquirer.prompt({
    //first name 
}, {
   // last name
}, {
// role list
}, {
    // manager
}, {
    //dept.
}).then ({}=> {

})
}

const updateEmp = ()=> {

}

