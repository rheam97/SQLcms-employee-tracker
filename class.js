const db = require('./connection')
const cTable = require('console.table')

class MyEmployees{
    constructor(db){
      this.db = db
    }
    departments(){
        const sql = `SELECT * FROM department`
        return this.db.query(sql, (err, rows)=> {
            if(err){
                console.log(err)
            }
            console.log("\n")
            console.table(rows)
            console.log("\n")
            
        })
    }
    roles(){
        const sql = `SELECT role.*, department.name AS department 
        FROM role LEFT JOIN department ON role.department_id= department.department_id`
        return this.db.query(sql, (err, rows)=> {
            if(err){
                console.log(err)
            }
            console.log("\n")
            console.table(rows) 
            console.log("\n")
        })
    }
    employees(){
        const sql = `SELECT employee.employee_id, employee.first_name, employee.last_name, employee.manager_id, 
        role.title AS title, role.salary AS salary, department.name AS department FROM employee
        LEFT JOIN role ON employee.role_id = role.role_id
        LEFT JOIN department ON role.department_id = department.department_id`
        return this.db.query(sql, (err, rows)=> {
            if(err){
                console.log(err)
            }
            console.log("\n")
            console.table(rows)
            console.log("\n")
        })
    }
    addDepartment(data){
        const sql = `INSERT INTO department (name) VALUES(?)`
        const params = data.name
        return this.db.query(sql, params, (err, result)=> {
            if(err){
                console.log(err)
            }
            else{
                console.log(`Added department named ${params} into database.`)
            }
        })
    }
    // addRoles(data){
    //     const sql = `INSERT INTO role (name, salary, )`
    // }
}

module.exports = new MyEmployees(db)