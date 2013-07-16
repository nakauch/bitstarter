var express = require('express');
var fs = require('fs');
var dataG;
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    response.send(toString(fs.readFile('index.html', function (err, data) {
	if (err) throw err;
	dataG = data;
    });));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});