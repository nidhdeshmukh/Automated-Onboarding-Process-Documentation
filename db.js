
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root@localhost',   // Replace with your MySQL username
  password: 'nidhi@06',  // Replace with your MySQL password
  database: 'onboarding'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

module.exports = connection;
