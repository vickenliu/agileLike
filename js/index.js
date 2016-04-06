var addKeyPoint= require('./addKeyPoint');
var $ = require('jquery');
require('jquery-ui/draggable');
require('jquery-ui/sortable');

import collectKeyPoint from './helpFn/collectKeyPoint'

$(document).ready(function(){
	$('.addBtn').click(function(){
    var newEle = addKeyPoint();
		$(this).before(newEle);
		moveKeyPoint();
    collectKeyPoint()
	})
	// initial the keyPoints are draggable
	moveKeyPoint();
});


function moveKeyPoint(){
	$('.keyPoint').draggable({ axis: "x" });
	$('.keyPoinNote').draggable({ axis: "y" });
}


