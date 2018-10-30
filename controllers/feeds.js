var feeds = require('../models/feeds');

exports.index = function(req, res) {
    //res.send('NOT IMPLEMENTED: Site Home Page');
	res.render('feeds', { title : 'Feeds', feeds : feeds.all() });
};
