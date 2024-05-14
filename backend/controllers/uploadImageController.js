const fs = require('fs');
const Jimp = require('jimp');
const db = require('../db/connection');

const getOrderID = (callback) => {
    db.query('SELECT MAX(order_id) AS maxOrderId FROM images', (err, result) => {
        if (err) {
            callback(err);
        } else {
            const nextOrderId = result.length ? parseInt(result[0].maxOrderId) + 1 : 1;
            const validOrderId = isNaN(nextOrderId) ? 1 : nextOrderId;
            callback(null, validOrderId);
        }
    });
};

exports.uploadImages = async (req, res, next) => {
    const files = req.files;

    try {
        for (const file of files) {
            const { category } = req.body;
            const originalname = file.originalname;
            let imageBuffer = fs.readFileSync(file.path);

            // Use Jimp for resizing
            const image = await Jimp.read(imageBuffer);
            await image.resize(800, 800).quality(80);
            imageBuffer = await image.getBufferAsync(Jimp.MIME_JPEG);

            getOrderID((err, orderID) => {
                if (err) {
                    next(err);
                } else {
                    db.query('INSERT INTO images (name, category, image, order_id) VALUES (?, ?, ?, ?)', [originalname, category, imageBuffer, orderID], (error, results, fields) => {
                        if (error) {
                            next(error);
                        }

                        fs.unlink(file.path, (err) => {
                            if (err) {
                                console.error('Error deleting file:', err);
                            } else {
                                console.log('File deleted successfully');
                            }
                        });
                    });
                }
            });
        }

        res.send('Images uploaded and saved to database.');
    } catch (error) {
        next(error);
    }
};
