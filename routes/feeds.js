var express = require('express');
var router = express.Router();

var feedsController = require('../controllers/feeds');

router.get('/', feedsController.index);

router.get('/:feedid', feedsController.feedid);

module.exports = router;
