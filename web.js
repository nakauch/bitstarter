var express = require('express');
var fs = require('fs');
var buf = require('buffer');
var dataG;
var app = express.createServer(express.logger());

fs.readFile('index.html', function (err, data) {
    if (err) throw err;
    dataG = buf.toString(data);
});

app.get('/', function(request, response) {
    response.send(dataG);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});