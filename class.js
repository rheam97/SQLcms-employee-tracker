const db = require('./connection')
const cTable = require('console.table')

class MyEmployees{
    constructor(db){
      this.db = db
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
    // addRoles(data){
    //     const sql = `INSERT INTO role (name, salary, )`
    // }
}

module.exports = new MyEmployees(db)