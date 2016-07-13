var express = require('express');
var app = express();

var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router({
  "cards": [],
  "todoLists": [],
  "todos": []
});
var middlewares = jsonServer.defaults();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/dist'));

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('dist/index');
});

app.listen(port, function() {
    console.log('App is running on http://localhost:' + port);
});

server.use(middlewares);

server.use(router);

server.listen(3000, function () {
  console.log('JSON Server is running on http://localhost:3000');
})