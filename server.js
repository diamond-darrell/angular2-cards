var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router({
  "cards": [],
  "todoLists": [],
  "todos": []
});
var middlewares = jsonServer.defaults({
  static: __dirname + '/dist'
});

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

server.use(middlewares);
server.use(router);

// set the home page route
server.get('/', function(req, res) {
    res.render('dist/index');
});

server.listen(port, function() {
    console.log('App is running on http://localhost:' + port);
});