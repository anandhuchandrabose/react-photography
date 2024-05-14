const express = require('express');
const router = express.Router();
const getApiCheck = require('../controllers/apiCheck');

router.get('/apicheck', getApiCheck.sayHello);



module.exports = router;
