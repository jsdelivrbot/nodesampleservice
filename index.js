var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {  
   response.writeHead(200, {'Content-Type': 'text/html'});
   response.write('<h1> ***** Welcome to Backer Media Lead Management! ****** </h1>');
   response.end();
})

app.get('/company', function(request, response) {
  response.status(200);
  response.setHeader('Content-Type', 'application/json');
  response.send(JSON.stringify({ "companyName": "Appshark" }));
})

app.get('/user', function(request, response) {
  response.status(200);
  response.setHeader('Content-Type', 'application/json');
  response.send(JSON.stringify({ "userName": "Ram" }));
})


app.get('/user2', function(request, response) {
  response.status(200);
  response.setHeader('Content-Type', 'application/json');
  response.send(JSON.stringify({ "userName": "Ram" }));
})

app.get('/user3', function(request, response) {
  response.status(200);
  response.setHeader('Content-Type', 'application/json');
  response.send(JSON.stringify({ "userName": "Ram" }));
})


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
