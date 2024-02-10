const mysql = require('mysql');
const connection = require('./config/database.js'); 


connection.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL database');

    const createUserTableQuery = `
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )
    `;

    connection.query(createUserTableQuery, (err, result) => {
        if (err) throw err;
        console.log('Users table created');
    });
});

module.exports = connection;