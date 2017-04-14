let express = require('express');
let router = express.Router();

let HelloWorldController = require('../controllers/helloWorld.js');

// .get is a method which 'sits' on HelloWorldController
// for more check controllers/helloWorld.js
router.get('/hello', HelloWorldController.get);

module.exports = router;
