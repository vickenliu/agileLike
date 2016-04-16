var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var fs=require('fs')
var router = express.Router();

var db= require('../data/db')

router.route('/')
      .get(function (req, res) {
        db.getAll('keypoints').then(function(data){
          res.send( data );
        })
      })
      .post(function (req, res) {
        db.addOne('keypoints',req.body).then(function(){
          console.log('saved data',req.body)
          res.status(201).send('ok');
        })
      });
router.route('/:id')
      .delete(function (req, res) {
        db.deleteOne('keypoints',req.params.id).then(function(){
          res.status(202).send('delete!')
        })
      })
      .post(function (req, res) {
        db.updateKP('keypoints',req.params.id,req.body).then(function(){
          res.status(202).send('delete!')
        })
      });


module.exports=router