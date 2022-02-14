const cTable = require('console.table')
const db = require('./connection')
class MyEmployees{
    constructor(db){
      this.db = db
    }
    departments(){
        const sql = `SELECT * FROM department`
        return db.query(sql, (err, rows)=> {
            if(err){
                console.log(err)
            }
            console.table(rows)
        })
    }
    roles(){
        const sql = `SELECT role.*, department.name AS department 
        FROM role LEFT JOIN department ON role.department_id= department.department_id`
        return db.query(sql, (err, rows)=> {
            if(err){
                console.log(err)
            }
            console.table(rows) 
        })
    }
    employees(){
        const sql = `SELECT employee.employee_id, employee.first_name, employee.last_name, employee.manager_id, 
        role.title AS title, role.salary AS salary, department.name AS department FROM employee
        LEFT JOIN role ON employee.role_id = role.role_id
        LEFT JOIN department ON role.department_id = department.department_id`
        return db.query(sql, (err, rows)=> {
            if(err){
                console.log(err)
            }
            console.table(rows)
        })
    }
    addEmployees(data){
        const sql = `INSERT INTO employee(first_name, last_name, ) VALUES (?,?,?,?)`
        const params = data.

    }
}

module.exports = MyEmployees