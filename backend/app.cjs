app.cjs


const express = require('express');
const multer = require('multer');
const mysql = require('mysql');
const fs = require('fs');

const app = express();
const upload = multer({ dest: './' });

// Create MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
});

// Connect to MySQL
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database");
  
  // Create "Admin" database if it doesn't exist
  connection.query('CREATE DATABASE IF NOT EXISTS Admin', (error, results, fields) => {
    if (error) throw error;
    console.log("Admin database created or already exists");
  });

  // Switch to "Admin" database
  connection.query('USE Admin', (error, results, fields) => {
    if (error) throw error;
    console.log("Switched to Admin database");
  });

  // Create "images" table if it doesn't exist
  connection.query(`CREATE TABLE IF NOT EXISTS images (
    id INT AUTO_INCREMENT PRIMARY KEY,
    filename VARCHAR(255) NOT NULL
  )`, (error, results, fields) => {
    if (error) throw error;
    console.log("Images table created or already exists");
  });
});

// Handle file upload
app.post('/upload', upload.single('image'), (req, res) => {
  const image = req.file.filename; // File name of the uploaded image
  // Insert the image filename into the database
  connection.query('INSERT INTO images (filename) VALUES (?)', [image], (error, results, fields) => {
    if (error) throw error;

    // Delete the file after storing it in the database
    fs.unlink(req.file.path, (err) => {
      if (err) throw err;
      console.log('File deleted successfully');
    });

    res.send('Image uploaded and saved to database.');
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});