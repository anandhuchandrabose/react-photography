const connection = require('./connection');

// Create the images table if it doesn't exist
const createImagesTableQuery = `
    CREATE TABLE IF NOT EXISTS images (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        category ENUM('home', 'fineart', 'lifeonstreets', 'commercial', 'travel') NOT NULL,
        order_id INT UNIQUE,
        image MEDIUMBLOB NOT NULL
    )
`;

// Execute the query
connection.query(createImagesTableQuery, (err, result) => {
    if (err) {
        console.error('Error creating IMAGES table:', err);
    } else {
        console.log('IMAGES table created or already exists');
    }
});
