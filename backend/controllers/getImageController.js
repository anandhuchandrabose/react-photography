const db = require('../db/connection');

exports.getImagesByCategory = (req, res, next) => {
    const category = req.params.category;
    db.query('SELECT * FROM images WHERE category = ?', [category], (error, results, fields) => {
        if (error) {
            next(error);
        }
        res.json(results);
    });
};

exports.getImageById = (req, res, next) => {
    const id = req.params.id;
    db.query('SELECT * FROM images WHERE id = ?', [id], (error, results, fields) => {
        if (error) {
            next(error);
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'Image not found' });
        }

        const image = results[0];
        const imageData = Buffer.from(image.image, 'base64');
        res.writeHead(200, {
            'Content-Type': 'image/jpeg',
            'Content-Length': imageData.length
        });
        res.end(imageData);
    });
};

exports.getAllImages = (req, res, next) => {
    db.query('SELECT * FROM images', (error, results, fields) => {
        if (error) {
            next(error);
        }
        res.json(results);
    });
};