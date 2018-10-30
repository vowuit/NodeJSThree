var feeds = [ {
	id : 'reddit',
	url : 'https://www.reddit.com/.rss'
}, {
	id : 'heise',
	url : 'https://www.heise.de/newsticker/heise-atom.xml'
}, {
	id : 'diezeit index',
	url : 'http://newsfeed.zeit.de/index'
}, {
	id : 'diezeit all',
	url : 'http://newsfeed.zeit.de/all'
} ];

exports.all = function() {
	return feeds;
};

exports.feed = function(id) {
	for ( var i in feeds) {
		if (feeds.hasOwnProperty(i)) {
			var feed = feeds[i];
			if (id === feed.id) {
				return feed;
			}
		}
	}
	throw new Error('feed [' + id + '] not found');
};
