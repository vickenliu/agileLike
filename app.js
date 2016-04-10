var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var keypoints = require('./router/keypoints');
var posts = require('./router/posts');
var app= express();
var http = require('http').Server(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static( path.join(__dirname,'public') ) );

app.use('/keypoints',keypoints)


app.use('/posts',posts)


app.listen(8090, function () {
  console.log('AgileLike app listening on port 8090!');
});
