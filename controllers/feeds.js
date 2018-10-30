var feeds = require('../models/feeds');

exports.index = function(req, res) {
    //res.send('NOT IMPLEMENTED: Site Home Page');
	res.render('feeds', { title : 'Feeds', feeds : feeds.all() });
};

exports.feedid = function(req, res) {
    //res.send('NOT IMPLEMENTED: Site Home Page');
	var feed = feeds.feed( req.params.feedid );
	res.render('feedid', { title : feed.id });
};