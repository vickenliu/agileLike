var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var fs=require('fs')
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static( path.join(__dirname,'public') ) );

app.route('/keypoints')
      .get(function (req, res) {
       fs.readFile('./data/keypoints.json',function(err,response){
          res.send( JSON.parse(response) );
        })
      })
      .post(function (req, res) {
        fs.writeFile('./data/keypoints.json', JSON.stringify(req.body) ,function(err,response){
          console.log('saved to keypoints.json');
          res.status(201).send('ok');
        })
      });

app.route('/posts')
      .get(function (req, res) {
       fs.readFile('./data/posts.json',function(err,response){
          res.send( JSON.parse(response) );
        })
      })
      .post(function (req, res) {
        fs.writeFile('./data/posts.json', JSON.stringify(req.body) ,function(err,response){
          console.log('saved to posts.json');
          res.status(201).send('ok');
        })
      });

app.post('/posts/:id', function (req, res) {
 fs.readFile('./data/posts.json',function(err,response){
    res.send( JSON.parse(response) );
  })



  fs.writeFile('./data/posts.json', JSON.stringify(req.body) ,function(err,response){
    console.log('saved to posts.json');
    res.status(201).send('ok');
  })
});

app.listen(8090, function () {
  console.log('AgileLike app listening on port 8090!');
});
