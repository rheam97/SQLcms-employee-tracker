const inquirer = require('inquirer')
const myemployees = require('./class')
const cTable = require('console.table')

// interval before returning back to list prompt
const int = () => setTimeout(()=> init(), 1000)

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
            int()
            break;
            case 'View All Roles':
            myemployees.roles()
            int()
            break;
            case 'View All Employees':
            myemployees.employees()
            int()
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
        int()})
   
}

const addRole = async ()=> {
    const [dept] = await myemployees.noTableDepartments()
    const deptChoices = dept.map(({department_id, name})=> ({
        name: name,
        value: department_id
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
        type: 'list',
        name: 'dept',
        message: 'What department is this role a part of?',
        choices: deptChoices
    }]).then(data=>{
        myemployees.addRoles(data)
        int()
    })
 

}

const addEmp = async ()=> {
const [role] = await myemployees.noTableRoles()
const roleChoices = role.map(({role_id, title})=> ({
    name: title,
    value: role_id
}))
const [manager] = await myemployees.noTableEmployees()
const managerChoices = manager.map(({employee_id, first_name, last_name})=> ({
    name: first_name + '' + last_name,
    value: employee_id
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
}]).then(data=> {
    myemployees.addEmployees(data)
    int()
}
)
}

const updateEmp = async ()=> {
 const [employee] = await myemployees.employees()
 const [role] = await myemployees.roles()
 inquirer.prompt([{
     type: 'list',
     name: 'employee',
     choices: employee
 }])
 }

init()

