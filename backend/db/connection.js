const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'portfolio',
    password: 'DX#12VF1%4',
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');

    connection.query('CREATE DATABASE IF NOT EXISTS Photography', (err, result) => {
        if (err) {
            console.error('Error creating database:', err);
            return;
        }
        console.log('Database created or already exists');

        connection.query('USE Photography', (err) => {
            if (err) {
                console.error('Error using database:', err);
                return;
            }
            console.log('Using database: Photography');
            require('./queries');
        });
    });
});

module.exports = connection;
