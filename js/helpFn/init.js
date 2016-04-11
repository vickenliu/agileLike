import pointTemplate from '../../views/keypoint.jade'
import postTemplate from '../../views/postTemp.jade'
import $ from 'jquery'
// import the help functions
import loadKeyPoints from './loadKeyPoints'
import moveKeyPoint from './moveKeyPoint'

module.exports = () => {
	$('.addBtn').dblclick(function(){
		$(this).before( pointTemplate({id: Date.now(), left: '0px', notePosition:'-50px', noteContent:'new point'}) );
		moveKeyPoint();
	})
	// initial the keyPoints are draggable
    loadKeyPoints()
    moveKeyPoint();

  $('#newpost').click(() => {
    $('#body').prepend( postTemplate({id:Date.now(),title:'title',body:'body',left:'20px',top:'20px'}) )
    moveKeyPoint();
  })

  $('.keyPoint').dblclick(function(e){
    let ele= e.target
    console.log(ele)
    // $.ajax({
    //   url:'/keypoints'+ele.id,
    //   method:'DELETE'
    // })
    $(ele).remove();
  })
}
