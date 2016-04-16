import pointTemplate from '../../views/keypoint.jade'
import $ from 'jquery'
// import the help functions
import loadKeyPoints from './loadKeyPoints'
import moveKeyPoint from './moveKeyPoint'
import setUser from './setUser'
import getKeyPointInfo from './getKeyPointInfo.js'
import postData from '../CRUD/postData'

module.exports = () => {
	$('.addBtn').dblclick(function(){
		$('#keyPointDiv').append( pointTemplate({tagid: Date.now().toString(), left: '87%', notePosition:'-50px', noteContent:'new point'}) );
		postData('/keypoints', getKeyPointInfo($('.keyPoint').last()) )
		moveKeyPoint();
	})
	// initial the keyPoints are draggable
    loadKeyPoints()
    moveKeyPoint();
}
