const mysql = require("mysql2");
const db = mysql.createConnection({
    host: 'localhost',
    //user: ,
    //password: ,
    database: 'todolistapp'
});
db.connect((error) => {
    if (error) throw error;
    console.log("connection successful");
});

module.exports = db;
