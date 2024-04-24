// const express = require('express');
// const multer = require('multer');
// const mysql = require('mysql');
// const fs = require('fs');
// const cors = require('cors'); 
// const sharp = require('sharp');

// const app = express();
// const upload = multer({ dest: './', limits: { files: 10 } }); 

// // Enable CORS for all requests
// app.use(cors());

// // Create MySQL connection
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
// });

// // Connect to MySQL
// connection.connect((err) => {
//   if (err) throw err;
//   console.log("Connected to MySQL database");
  
//   // Create "Photography" database if it doesn't exist
//   connection.query('CREATE DATABASE IF NOT EXISTS Photography', (error, results, fields) => {
//     if (error) throw error;
//     console.log("Photography database created or already exists");
//   });

//   // Switch to "Photography" database
//   connection.query('USE Photography', (error, results, fields) => {
//     if (error) throw error;
//     console.log("Switched to Photography database");
//   });

//   // Change your images table schema to store image data along with category
//   connection.query(`CREATE TABLE IF NOT EXISTS images (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(255) NOT NULL,
//     category ENUM('black&white', 'home','portrait', 'landscape') NOT NULL,
//     image LONGBLOB NOT NULL
//   )`, (error, results, fields) => {
//     if (error) throw error;
//     console.log("Images table created or already exists");
//   });
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });

// // Handle file upload to store image data
// app.post('/upload', upload.array('images', 10), async (req, res, next) => {
//   const files = req.files;
  
//   try {
//     for (const file of files) {
//       const { category } = req.body;
//       const originalname = file.originalname;
//       let imageBuffer = fs.readFileSync(file.path); 
  
//       // Compress image using sharp
//       imageBuffer = await sharp(imageBuffer)
//         .resize({ fit: 'inside', width: 800, height: 800 })
//         .toBuffer(); 
    
//       connection.query('INSERT INTO images (name, category, image) VALUES (?, ?, ?)', [originalname, category, imageBuffer], (error, results, fields) => {
//         if (error) {
//           next(error);
//         }
        
        
//         fs.unlink(file.path, (err) => {
//           if (err) throw err;
//           console.log('File deleted successfully');
//         });
//       });
//     }
  
//     res.send('Images uploaded and saved to database.');
//   } catch (error) {
//     next(error); 
//   }
// });

// // Route to fetch images by category (e.g., "home")
// app.get('/images/:category', (req, res, next) => {
//   const category = req.params.category;
//   connection.query('SELECT * FROM images WHERE category = ?', [category], (error, results, fields) => {
//     if (error) {
//       next(error); 
//     }
//     res.json(results); 
//   });
// });

// // Route to fetch an image by ID
// app.get('/image/:id', (req, res, next) => {
//   const id = req.params.id;
//   connection.query('SELECT * FROM images WHERE id = ?', [id], (error, results, fields) => {
//     if (error) {
//       next(error); 
//     }

//     if (results.length === 0) {
//       return res.status(404).json({ message: 'Image not found' });
//     }

//     // Assuming the image is stored as a base64 encoded string in the database
//     const image = results[0];
//     const imageData = Buffer.from(image.image, 'base64');
//     res.writeHead(200, {
//       'Content-Type': 'image/jpeg', // Adjust content type based on your image type
//       'Content-Length': imageData.length
//     });
//     res.end(imageData);
//   });
// });

// app.listen(3001, () => {
//   console.log('Server is running on port 3001');
// });
