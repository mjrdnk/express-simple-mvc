let express = require('express');
let router = express.Router();

let helloWorld = require('../controllers/helloWorld.js');

router.get('/hello', helloWorld.get);

module.exports = router;
