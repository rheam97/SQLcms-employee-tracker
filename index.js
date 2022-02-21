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
        choices: ['View All Departments', 'View All Roles', 'View All Employees','View Managers', 'View Employees by Department', 'View Budgets', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role', 
        'Update Manager', 'Delete an Employee', 'Delete a Department', 
        'Delete a Role',  'Exit']
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
            case 'View Managers':
            myemployees.managers()
            int()
            break;
            case 'View Employees by Department':
            viewByDept()
            break;
            case 'View Budgets':
            myemployees.budgets()
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
            case 'Update Manager':
            updateManager()
            break;
            case 'Delete an Employee':
            deleteEmp()
            break;
            case 'Delete a Department':
            deleteDept()
            break;
            case 'Delete a Role':
            deleteRole()
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
    name: first_name + ' ' + last_name,
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

const deleteEmp = async()=> {
    const [employee] = await myemployees.noTableEmployees()
    const employeeChoices = employee.map(({employee_id, first_name, last_name})=> ({
        name: first_name + ' ' + last_name,
        value: employee_id
    }))
    inquirer.prompt([{
        type: 'list',
        name: 'delete',
        message: 'Which employee would you like to delete?',
        choices: employeeChoices
    }]).then(data=> {
        myemployees.delEmp(data)
        int()
    })
}

const deleteRole = async()=> {
    const [role] = await myemployees.noTableRoles()
 const roleChoices = role.map(({role_id, title})=> ({
    name: title,
    value: role_id
 }))
 inquirer.prompt([{
    type: 'list',
    name: 'delete',
    message: 'Which role would you like to delete?',
    choices: roleChoices
}]).then(data=> {
    myemployees.delRole(data)
    int()
})
}

const deleteDept = async()=> {
    const [dept] = await myemployees.noTableDepartments()
    const deptChoices = dept.map(({department_id, name})=> ({
        name: name,
        value: department_id
    }))
    inquirer.prompt([{
        type: 'list',
        name: 'delete',
        message: 'Which department would you like to delete?',
        choices: deptChoices
    }]).then(data=> {
        myemployees.delDept(data)
        int()
    })
}
const updateEmp = async ()=> {
 const [employee] = await myemployees.noTableEmployees()
 const employeeChoices = employee.map(({employee_id, first_name, last_name})=> ({
     name: first_name + ' ' + last_name,
     value: employee_id
 }))
 const [role] = await myemployees.noTableRoles()
 const roleChoices = role.map(({role_id, title})=> ({
    name: title,
    value: role_id
 }))
 inquirer.prompt([{
     type: 'list',
     name: 'employee',
     choices: employeeChoices
 },
{
    type: 'list',
    name: 'role',
    choices: roleChoices
}]).then(data=> {
    myemployees.updateEmployees(data)
    int()
})}

const viewByDept = async()=> {
    const [dept] = await myemployees.noTableDepartments()
    const deptChoices = dept.map(({department_id, name})=> ({
        name: name,
        value: department_id
    }))
    inquirer.prompt([
        {
            type: 'list',
            name: 'dept',
            message: "Which department's employees would you like to view?",
            choices: deptChoices
        }
    ]).then(data=> {
        myemployees.viewDept(data)
        int()
    })
}
const updateManager = async()=> {
    const [employee] = await myemployees.noTableEmployees()
    const employeeChoices = employee.map(({employee_id, first_name, last_name})=> ({
        name: first_name + ' ' + last_name,
        value: employee_id
    }))
    inquirer.prompt([{
        type: 'list',
        name: 'newManager',
        message:"Whose manager status would you like to update?",
        choices: employeeChoices
    },
    {
        type: 'list',
        name: 'manager_id',
        message: 'Which manager id will you give them?',
        choices:[0, 1, 2, 3, 4]
      }
]).then(data=> {
    myemployees.newManager(data)
    int()
})
}

init()

