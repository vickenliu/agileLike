var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var fs=require('fs')
var router = express.Router();

router.route('/')
      .get(function (req, res) {
       fs.readFile('./data/posts.json',function(err,response){
          res.send( JSON.parse(response) );
        })
      })
      .post(function (req, res) {
        fs.writeFile('./data/posts.json', JSON.stringify(req.body) ,function(err,response){
          console.log('created,and saved to posts.json');
          res.status(201).send('ok');
        })
      });

router.route('/:id')
      .all(function(req,res,next){
        fs.readFile('./data/posts.json',function(err,response){
          req.posts=JSON.parse(response).posts
          next()
        })
      })
      .post(function (req, res) {
        var post= req.posts.find((item) => item.id == req.params.id)
        Object.assign(post,req.body)
        fs.writeFile('./data/posts.json', JSON.stringify({posts:req.posts}) ,function(err,response){
          console.log('update and saved to posts.json');
          res.status(201).send('ok');
        })
      })
      .delete((req,res)=>{
        var posts= req.posts.filter((item)=> {
          console.log(item.id != req.params.id)
          return item.id != req.params.id
        })
        console.log('left',{posts})
        fs.writeFile('./data/posts.json', JSON.stringify({ posts}) ,function(err,response){
          console.log('after delete saved to posts.json');
          res.status(201).send('ok');
        })
      });


module.exports=router