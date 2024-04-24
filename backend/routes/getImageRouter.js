const express = require('express');
const router = express.Router();
const getImageController = require('../controllers/getImageController');

router.get('/getImageCategory/:category', getImageController.getImagesByCategory);
router.get('/getImageID/:id', getImageController.getImageById);
router.get('/getImages', getImageController.getAllImages);



module.exports = router;
