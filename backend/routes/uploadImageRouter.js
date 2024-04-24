const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/uploadImageController');
const upload = require('../middleware/upload');

router.post('/upload', upload.array('images', 10), uploadController.uploadImages);

module.exports = router;
