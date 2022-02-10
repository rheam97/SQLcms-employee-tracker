const 
const db = require('./connection')
class MyEmployees{
    constructor(db){
      this.db = db
    }
    departments(){
        const sql = `SELECT * FROM department`
        return db.query(sql, (err, rows)=> {

        })
    }
    roles(){
        const sql = `SELECT * FROM role`
        return db.query(sql, (err, rows)=> {

        })
    }
    employees(){
        const sql = `SELECT * FROM employee`
        return db.query(sql, (err, rows)=> {

        })
    }
    addEmployees(data){
        const sql = `INSERT INTO employee VALUES (?,?,?,?)`
        const params = data.

    }
}

module.exports = MyEmployees