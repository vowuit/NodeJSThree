var feeds = [ {
	id : 'reddit',
	url : 'https://www.reddit.com/.rss'
}, {
	id : 'heise',
	url : 'https://www.heise.de/newsticker/heise-atom.xml'
} ];

exports.all = function() {
	return feeds;
};
