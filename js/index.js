var addKeyPoint= require('./addKeyPoint');
var $ = require('jquery');
require('jquery-ui/draggable');
require('jquery-ui/sortable');


$(document).ready(function(){
	$('.addBtn').click(function(){
    var newEle = addKeyPoint();
		$(this).before(newEle);
		moveKeyPoint();
    collectKeyPoint()
	})

	// initial the keyPoints are draggable
	moveKeyPoint();
  collectKeyPoint()
});


function moveKeyPoint(){
	$('.keyPoint').draggable({ axis: "x" });
	$('.keyPoinNote').draggable({ axis: "y" });
}

function collectKeyPoint(){
  let keyPoints=[];
  $('.keyPoint').not('.addBtn').each( (i,ele) => {
    let id=ele.id,
        left=$(ele).position().left || 0,
        notePosition= $(ele).find('.keyPoinNote').position().top || 0;
        keyPoints.push({id, left, notePosition});
  })
  $.ajax({
    url:'/keyPoints',
    method: 'POST',
    data: { keyPoints }
  })
}
