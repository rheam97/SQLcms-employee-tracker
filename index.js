const inquirer = require('inquirer')
const myemployees = require('./class')

const init = () => {
    inquirer.prompt({
        // list to either view departments, roles, employees, or add them/ exit/ delete/ update
        // launch inquirer prompts
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

