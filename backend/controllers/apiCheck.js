const db = require('../db/connection');


exports.sayHello = (req, res) => {
    res.send('<h1>Hi API IS WORKING</h1>');
};