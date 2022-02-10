const mysql2 = require('mysql2/promise')
const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'myemployees'
})

db.connect(err=> {
    if(err) throw err
    console.log('Database connected.')})
    
module.exports = db