var express = require('express');
var router = express.Router();

var feedsController = require('../controllers/feeds');

router.get('/', feedsController.index);

module.exports = router;
