var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var fs=require('fs')
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static( path.join(__dirname,'public') ) );


app.get('/keypoints', function (req, res) {
  res.send('Hello World!');
});

app.post('/keypoints', function (req, res) {

});

app.listen(8090, function () {
  console.log('AgileLike app listening on port 8090!');
});
