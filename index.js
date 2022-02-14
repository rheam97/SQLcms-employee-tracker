const inquirer = require('inquirer')
const myemployees = require('./class')
const cTable = require('console.table')

const sleep = () => {setTimeout(()=> {
    init()
   }, 1000)}

// list to either view departments, roles, employees, or add them/ exit/ delete/ update
function init () {
    inquirer.prompt({
        type: 'list',
        name: 'action',
        choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role', 'Exit']
    }).then(({action})=> {
        switch (action){
            case 'View All Departments':
            myemployees.departments()
            sleep()
            break;
            case 'View All Roles':
            myemployees.roles()
            sleep()
            break;
            case 'View All Employees':
            myemployees.employees()
            sleep()
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

const addDept = () => {
    inquirer.prompt({
        type: 'input',
        name: 'name',
        message: 'What would you like to name your department?'
    }).then(data=> 
        {myemployees.addDepartment(data)
        sleep()})
   
}

const addRole = async ()=> {
    const [dept] = await myemployees.departments
    const deptChoices = dept.map(({id, name})=> ({
        name: name,
        value: id
    }))
    inquirer.prompt([{
    type: 'input',
    name: 'title',
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
        message: 'What department is this role a part of?',
        choices: deptChoices
    }]).then(data=>{
        myemployees.addRoles(data)
        sleep()
    })
 

}

const addEmp = ()=> {
const [role] = myemployees.roles()
const roleChoices = role.map(({id, title})=> ({
    name: title,
    value: id
}))
const [manager] =myemployees.employees()
const managerChoices = manager.map(({id, first_name, last_name})=> ({
    name: first_name + '' + last_name,
    value: id
    }))
inquirer.prompt([{
    type: 'input',
    name:'first_name',
    message: "What is the new employee's first name?"
}, {
    type: 'input',
    name:'last_name',
    message: "What is the new employee's last name?"
}, {
    type: 'list',
    name:'role',
    message: "What is the new employee's role",
    choices:roleChoices
}, {
    type: 'list',
    name:'manager',
    message: "Who is the new employee's manager?",
    choices: managerChoices
}])
    myemployees.addRoles(data)
    sleep()

}

const updateEmp = ()=> {
 const [employee] = myemployees.employees()
 const [role] = myemployees.roles()
 inquirer.prompt([{
     type: 'list',
     name: 'employee',
     choices: employee
 }])
 }

init()

