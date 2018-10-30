var feeds = require('../models/feeds');

var Parser = require('rss-parser');
var parser = new Parser();

exports.index = function(req, res, next) {
    //res.send('NOT IMPLEMENTED: Site Home Page');
	res.render('feeds', { title : 'Feeds', feeds : feeds.all() });
};

exports.feedid = function(req, res, next) {
    //res.send('NOT IMPLEMENTED: Site Home Page');
	var feed = feeds.feed( req.params.feedid );
	parser.parseURL(feed.url, function(err, feed) {
		res.render('feedid', { title : feed.title, items : feed.items });
	});
};