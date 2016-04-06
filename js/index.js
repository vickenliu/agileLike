var addKeyPoint= require('./addKeyPoint');
var $ = require('jquery');
require('jquery-ui/draggable');
require('jquery-ui/sortable');

import collectKeyPoint from './helpFn/collectKeyPoint'
import keypoint from '../views/keypoint.jade'

$(document).ready(function(){
	$('.addBtn').click(function(){
    var newEle = addKeyPoint();
		$(this).before(newEle);
		moveKeyPoint();
    collectKeyPoint()

	})
	// initial the keyPoints are draggable
  loadKeyPoints()
  moveKeyPoint();
});


function moveKeyPoint(){
	$('.keyPoint').draggable({ axis: "x" });
	$('.keyPoinNote').draggable({ axis: "y" });
}

import getData from './CRUD/getData'
function loadKeyPoints(){
  let points;
  getData('/keypoints',(data) => {
    points = data;
    points.keyPoints.forEach((point) => {
      $('.addBtn.keyPoint').before( keypoint(point) )
    })
    moveKeyPoint();
  })
}
