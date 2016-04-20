var express = require('express');
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
          res.status(201).send('ok');
        })
      });
router.route('/:id')
      .delete(function (req, res) {
        db.deleteKP('keypoints',req.params.id).then(function(){
          res.status(202).send('delete!')
        })
      })
      .post(function (req, res) {
        db.updateKP('keypoints',req.params.id,req.body).then(function(){
          res.status(202).send('saved!')
        })
      });


module.exports=router