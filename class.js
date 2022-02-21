const db = require('./connection')
const cTable = require('console.table')

class MyEmployees{
    constructor(db){
      this.db = db
    }
    noTableDepartments(){
        const sql = `SELECT * FROM department`
        return db.promise().execute(sql)
    }
    noTableRoles(){
        const sql = `SELECT role.*, department.name AS department 
        FROM role LEFT JOIN department ON role.department_id= department.department_id`
        return db.promise().execute(sql)
    }
    noTableEmployees(){
            const sql = `SELECT employee.employee_id, employee.first_name, employee.last_name, employee.manager_id, 
            role.title AS title, role.salary AS salary, department.name AS department FROM employee
            LEFT JOIN role ON employee.role_id = role.role_id
            LEFT JOIN department ON role.department_id = department.department_id`
            return db.promise().execute(sql)
    }
    departments(){
        const sql = `SELECT * FROM department`
        return db.promise().query(sql).then(([rows])=> {
            console.log("\n")
            console.table(rows)
            console.log("\n")
        }).catch(error=> {
            throw error
        })
    }
    roles(){
        const sql = `SELECT role.*, department.name AS department 
        FROM role LEFT JOIN department ON role.department_id= department.department_id`
        return db.promise().query(sql).then(([rows])=> {
            console.log("\n")
            console.table(rows) 
            console.log("\n")
        }).catch(error=> {
            throw error
        })
    }
    employees(){
        const sql = `SELECT employee.employee_id, employee.first_name, employee.last_name, employee.manager_id, 
        role.title AS title, role.salary AS salary, department.name AS department FROM employee
        LEFT JOIN role ON employee.role_id = role.role_id
        LEFT JOIN department ON role.department_id = department.department_id`
        return db.promise().query(sql).then(([rows])=> {
            console.log("\n")
            console.table(rows) 
            console.log("\n")
        }).catch(error=> {
            throw error
        })
    }
    managers(){
        const sql = `SELECT employee.first_name, employee.last_name, department.name as department
        from employee
        LEFT JOIN role on employee.role_id=role.role_id
        left join department on role.department_id=department.department_id
        where manager_id IS NOT NULL`
        return db.promise().query(sql).then(([rows])=> {
            console.log("\n")
            console.table(rows) 
            console.log("\n")
        }).catch(error=> {
            throw error
        })
    }
    budgets(){
        const sql = `SELECT count(*) as staff_count, sum(role.salary) as budget, department.name as department 
        from employee
        left join role on employee.role_id=role.role_id
        left join department on role.department_id=department.department_id
        group by department`
        return db.promise().query(sql).then(([rows])=> {
            console.log("\n")
            console.table(rows) 
            console.log("\n")
        }).catch(error=> {
            throw error
        })
    }
    viewDept(data){
        const sql = `SELECT employee.employee_id, employee.first_name, employee.last_name, department.name as department
        from employee
        LEFT JOIN role on employee.role_id=role.role_id
        left join department on role.department_id=department.department_id
        where department.department_id = ?`
        const params = [data.dept]
        return db.promise().query(sql, params).then(([rows])=> {
            console.log("\n")
            console.table(rows) 
            console.log("\n")
        }).catch(error=> {
            throw error
        })
    }
   addDepartment(data){
        const sql = `INSERT INTO department (name) VALUES(?)`
        const params = data.name
        return db.promise().query(sql, params).then(()=> {
            console.log("\n")
            console.log(`Added department named ${params} into database.`)
            console.log("\n")
        }).catch(error=> {
            throw error
        })

    }
    addRoles(data){
    const sql = `INSERT INTO role (title, salary, department_id) VALUES(?,?,?)`
    const params = [data.title, data.salary, data.dept]
    return db.promise().query(sql, params).then(()=> {
        console.log("\n")
        console.log(`Added role named ${params[0]} into database.`)
        console.log("\n")
    }).catch(error=> {
        throw error
    })
    }
    addEmployees(data){
        const sql = `INSERT INTO employee(first_name, last_name, role_id, manager_id)
        VALUES(?,?,?,?)`
        const params = [data.first_name, data.last_name, data.role, data.manager]
        return db.promise().query(sql, params).then(()=> {
            console.log("\n")
            console.log(`Added employee named ${params[0]} ${params[1]} into database.`)
            console.log("\n")
        }).catch(error=> {
            throw error
        })
    }
    delEmp(data){
        const sql = `DELETE FROM employee WHERE employee_id=?`
        const params = [data.delete]
        return db.promise().query(sql, params).then(()=> {
            console.log("\n")
            console.log(`Deleted employee with id ${params[0]} from database.`)
            console.log("\n")
        }).catch(error=> {
            throw error
        })
    }
    delRole(data){
        const sql = `DELETE FROM role WHERE role.role_id=?`
        const params = [data.delete]
        return db.promise().query(sql, params).then(()=> {
            console.log("\n")
            console.log(`Deleted role with id ${params[0]} from database.`)
            console.log("\n")
        }).catch(error=> {
            throw error
        })
    }
    delDept(data){
        const sql = `DELETE FROM department WHERE department.department_id=?`
        const params = [data.delete]
        return db.promise().query(sql, params).then(()=> {
            console.log("\n")
            console.log(`Deleted department with id ${params[0]} from database.`)
            console.log("\n")
        }).catch(error=> {
            throw error
        })
    }
    updateEmployees(data){
        const sql = `UPDATE employee SET role_id=? WHERE employee_id =?`
        const params = [data.role, data.employee]
        return db.promise().query(sql, params).then(()=> {
            console.log("\n")
            console.log(`Updated employee's role in database. View employees to confirm.`)
            console.log("\n")
        }).catch(error=> {
            throw error
        })
    }
    newManager(data){
        if(data.manager_id ===0){
            data.manager_id=null
        }
        const sql = `UPDATE employee SET manager_id=? WHERE employee_id =?`
        const params = [data.manager_id, data.newManager]
        return db.promise().query(sql, params).then(()=> {
            console.log("\n")
            console.log("Updated employee's role in database. View Managers to confirm.")
            console.log("\n")
        }).catch(error=> {
            throw error
        })
    }
}

module.exports = new MyEmployees(db)