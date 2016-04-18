var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var keypoints = require('./router/keypoints');
var posts = require('./router/posts');
var app= express();
var http = require('http').Server(app);
var io = require('socket.io')(http);



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static( path.join(__dirname,'public') ) );

app.use('/keypoints',keypoints)


app.use('/posts',posts)



io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('change',function(msg){
    io.emit('change',msg)
  })
});

var port = normalizePort(process.env.PORT || 3000);
http.listen(port, function () {
  console.log('AgileLike app listening on port! ',port);
});


function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

module.exports= app