var addKeyPoint= require('./addKeyPoint');
var $ = require('jquery');
require('jquery-ui/draggable');
require('jquery-ui/sortable');


$(document).ready(function(){
	$('.addBtn').click(function(){
		$(this).before(addKeyPoint());
		moveKeyPoint();
	})

	// initial the keyPoints are draggable
	moveKeyPoint();

});

	
function moveKeyPoint(){
	$('.keyPoint').draggable({ axis: "x" });
	$('.keyPoinNote').draggable({ axis: "y" });
}