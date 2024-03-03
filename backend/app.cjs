const express = require('express');
const multer = require('multer');
const mysql = require('mysql');
const fs = require('fs');
const cors = require('cors'); 
const sharp = require('sharp');

const app = express();
const upload = multer({ dest: './' });

// Enable CORS for all requests
app.use(cors());

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

  // Change your images table schema to store image data
  connection.query(`CREATE TABLE IF NOT EXISTS images (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image LONGBLOB NOT NULL
  )`, (error, results, fields) => {
    if (error) throw error;
    console.log("Images table created or already exists");
  });
});

// Handle file upload to store image data
app.post('/upload', upload.single('image'), async (req, res) => {
  const imageName = req.file.originalname;
  let imageBuffer = fs.readFileSync(req.file.path); // Read the uploaded image file

  try {
    // Compress image using sharp
    imageBuffer = await sharp(imageBuffer)
      .resize({ fit: 'inside', width: 800, height: 800 }) // Resize the image
      .toBuffer(); // Convert image to buffer
  
    // Insert the compressed image data into the database
    connection.query('INSERT INTO images (name, image) VALUES (?, ?)', [imageName, imageBuffer], (error, results, fields) => {
      if (error) throw error;
  
      // Delete the file after storing it in the database
      fs.unlink(req.file.path, (err) => {
        if (err) throw err;
        console.log('File deleted successfully');
      });
  
      res.send('Image uploaded and saved to database.');
    });
  } catch (error) {
    res.status(500).send('Error uploading image: ' + error.message);
  }
});

// Add a new route to fetch all images from the database
app.get('/images', (req, res) => {
  connection.query('SELECT * FROM images', (error, results, fields) => {
    if (error) throw error;
    res.json(results); // Send the images data as JSON response
  });
});

// Route to serve image by ID
app.get('/image/:id', (req, res) => {
  const imageId = req.params.id;
  connection.query('SELECT * FROM images WHERE id = ?', [imageId], (error, results, fields) => {
    if (error) throw error;
    if (results.length === 0) {
      return res.status(404).send('Image not found');
    }
    const imageData = results[0];
    res.setHeader('Content-Type', 'image/jpeg');
    res.send(imageData.image);
  });
});

// Route to delete image by ID
app.delete('/image/:id', (req, res) => {
  const imageId = req.params.id;
  connection.query('DELETE FROM images WHERE id = ?', [imageId], (error, results, fields) => {
    if (error) throw error;
    res.send('Image deleted successfully');
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
