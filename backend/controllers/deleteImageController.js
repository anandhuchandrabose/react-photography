const db = require('../db/connection');

exports.deleteImageById = (req, res, next) => {
    const order_id = req.params.order_id;
    db.query('DELETE FROM images WHERE order_id = ?', [order_id], (error, results, fields) => {
        if (error) {
            next(error);
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Image not found' });
        }

        db.query('SELECT order_id FROM images ORDER BY order_id ASC', (error, results, fields) => {
            if (error) {
                next(error);
            }

            for (let i = 0; i < results.length; i++) {
                const newId = i + 1;
                const oldId = results[i].order_id;
                db.query('UPDATE images SET order_id = ? WHERE order_id = ?', [newId, oldId], (error, results, fields) => {
                    if (error) {
                        next(error);
                    }
                });
            }

            res.status(200).json({ message: 'Image deleted successfully' });
        });
    });
};
