import pointTemplate from '../../views/keypoint.jade'

// import the help functions
import loadKeyPoints from './loadKeyPoints'
import moveKeyPoint from './moveKeyPoint'
import postData from '../CRUD/postData'
import Helper from './helperClass'
const helper=new Helper
import Keypoint from './kpClass'
const keypoint=new Keypoint


module.exports = () => {
	$('.addBtn').dblclick(function(){
		$('#keyPointDiv').append( pointTemplate({tagid: Date.now().toString(), left: '87%', notePosition:'-50px', noteContent:'new point'}) );
		postData('/keypoints', keypoint.getKeyPointInfo($('.keyPoint').last()) )
		moveKeyPoint();
	})
	// initial the keyPoints are draggable
    loadKeyPoints()
    moveKeyPoint();
    socketEvent(pointTemplate,moveKeyPoint)
    $('#newpost').on('click',helper.alertFn)
}


function socketEvent(pointTemplate,moveKeyPoint){
	    socket.on('change',function(msg){
          var ele= $(".post[data-id='"+msg.tagid+"']");
          if($(ele).length>0){
            console.log('i am here')
            $(ele).css({
              'left':msg.left,
              'top':msg.top
            }).find('.header').css('background-color',msg.bgColor)
            $(ele).find('.postbody').text(msg.body)
          }else{
            $('#body').prepend( postTemp(msg))
            moveKeyPoint()
          }
        })
        socket.on('KPchange',function(data){
          $(".keyPoint[data-id='"+data.tagid+"']").css({
              'left':data.left
            }).find('.keyPoinNote').css('top',data.notePosition).find('.nameInfo').text(data.noteContent)
        })
        socket.on('delete',function(id){
        	 $(".post[data-id='"+id+"']").remove()
        })
}