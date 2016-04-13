import pointTemplate from '../../views/keypoint.jade'
import $ from 'jquery'
// import the help functions
import loadKeyPoints from './loadKeyPoints'
import moveKeyPoint from './moveKeyPoint'


module.exports = () => {
	$('.addBtn').dblclick(function(){
		$('#keyPointDiv').append( pointTemplate({id: Date.now(), left: '0px', notePosition:'-50px', noteContent:'new point'}) );
		moveKeyPoint();
	})
	// initial the keyPoints are draggable
    loadKeyPoints()
    moveKeyPoint();
}
