var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var fs=require('fs')
var router = express.Router();
var db= require('../data/db')

router.route('/')
      .get(function (req, res) {
          db.getAll('posts').then(function(data){
            res.send( data);
          })
      })
      .post(function (req, res) {
        db.addOne('posts',req.body).then(function(){
          res.status(201).send('ok');
        })
      });

router.route('/:id')
      .post(function (req, res) {
        db.updateOne('posts',req.params.id,req.body).then(function(){
          res.status(201).send('ok');
        })
      })
      .delete((req,res)=>{
        db.deleteOne('posts',req.params.id).then(function(){
          res.status(201).send('ok');
        })
      });


module.exports=router