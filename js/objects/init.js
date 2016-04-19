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
    $('#newpost').on('click',helper.alertFn)
}
