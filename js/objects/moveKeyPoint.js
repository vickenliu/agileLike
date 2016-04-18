var $ = require('jquery');
require('jquery-ui');
import Helper from './helperClass'
const helper=new Helper
import Post from './postClass'
const post=new Post

import Keypoint from './kpClass'
const keypoint=new Keypoint


module.exports= ()=>{
	$('.keyPoint').not('.addBtn').draggable({ axis: "x",containment:'#keyPointDiv',stop: keypoint.updateKP.bind(keypoint) });
	$('.keyPoinNote').draggable({ axis: "y",stop: keypoint.updateKP.bind(keypoint) });
	$('.draggable').draggable({
    containment:'body',
    scroll: false,
		stop: post.updatePost.bind(post),
    drag: helper.changeTitle
	})

  post.ableEdit();

  $('.nameInfo').on('dblclick',keypoint.editStageName.bind(keypoint))
  $('.postImg').click(post.showPost)


  keypoint.ableDeleteKP();
}


