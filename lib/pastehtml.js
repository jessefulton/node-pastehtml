var http = require('http');
var querystring = require('querystring');


/**
 * This will create a page on pastehtml.com and will return the URL of that page
 *
 * @param {String} data the text/html/markdown
 * @param {String} type either "html", "txt" or "mrk"
 * @pram {Function} callback handler, passed the URL of the created page
 *
 * @see http://pastehtml.com/help/api
 */
module.exports.create = function(data, type, callback) {
	
	var post_data = querystring.stringify({
		"txt": data
	});
	
	var options = {
		hostname: 'pastehtml.com',
		path: '/upload/create?input_type=' + type + '&result=address',
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Content-Length': post_data.length
		}
	};
	
	var req = http.request(options, function(res) {
		res.setEncoding('utf8');
		res.on('data', callback);
	});
	
	req.write(post_data);
	req.end();
};