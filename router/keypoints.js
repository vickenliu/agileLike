var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var fs=require('fs')
var router = express.Router();

router.route('/')
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


module.exports=router