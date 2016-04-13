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
router.route('/:id')
      .delete(function (req, res) {
        console.log('delete request recieved')
       fs.readFile('./data/keypoints.json',function(err,response){
          var stages= JSON.parse(response).keyPoints;
          stages= stages.filter((stage)=>{
            return stage.id != req.params.id
          })
          fs.writeFile('./data/keypoints.json',JSON.stringify({keyPoints:stages}));
          res.status(202).send('delete!')
        })
      });


module.exports=router