var $ = require('jquery')
import pointTemplate from '../views/keypoint.jade'
import postTemplate from '../views/postTemp.jade'

// import the help functions
//import collectKeyPoint from './helpFn/collectKeyPoint'
import loadKeyPoints from './helpFn/loadKeyPoints'
import moveKeyPoint from './helpFn/moveKeyPoint'

$(document).ready(function(){
	$('.addBtn').click(function(){
		$(this).before( pointTemplate({id: Date.now(), left: '0px', notePosition:'-50px', noteContent:'new point'}) );
		moveKeyPoint();
	})
	// initial the keyPoints are draggable
  loadKeyPoints()
  moveKeyPoint();

  $('#newpost').click(() => {
    $('body').prepend( postTemplate({postId:Date.now(),title:'title',body:'body'}) )
    moveKeyPoint();
  })
});





