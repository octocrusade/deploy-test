var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.get('/', function(request, response) {
    response.sendfile(__dirname + '/shmindex.html');
}).listen(port);
