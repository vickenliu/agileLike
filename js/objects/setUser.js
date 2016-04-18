import $ from 'jquery'
import postTemplate from '../../views/postTemp.jade'

import moveKeyPoint from './moveKeyPoint'
import Helper from './helperClass'
const helper=new Helper
import Post from './postClass'
const post=new Post

import Keypoint from './kpClass'
const keypoint=new Keypoint

var setUser= (gitname) => {
 	helper.getGihub(gitname,(err,info)=>{
	  $('#user input').val(info.name)
	  $('#user img').attr('src',info.url)
	  $('#newpost').off('click',helper.alertFn)
	  post.newPost(info)
	  helper.moveKeyPoint()
	})
}

module.exports= setUser

function 
