

const express = require('express');
const router = express.Router();
const deleteImageController = require('../controllers/deleteImageController');

router.delete('/deleteImage/:order_id', deleteImageController.deleteImageById);

module.exports = router;