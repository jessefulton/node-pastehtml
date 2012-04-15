var pastehtml = require('./index');
pastehtml.create("<h1>Goodbye, World</h1>", "html", function(url) { console.log(url); });