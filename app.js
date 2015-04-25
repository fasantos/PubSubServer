'use strict';

var express = require('express');
var badges = require('./controllers/badges');

var app = express();
var port = process.env.PORT || 4000;

/*
* Have server listen on port 4000
*/
app.listen(port, function () {
	console.log('Server is listening on port %d\nTo turn of the server, press ctrl-c', port);
});

/*
* Parse data from incoming requests
*/
app.use(express.json());


/*
* Accept POST request and then publish the body of the request
*/
app.post('/', badges.save, badges.trim, badges.send);

/*
* Get the most recent 10 badges
*/
app.get('/badges', badges.get);
