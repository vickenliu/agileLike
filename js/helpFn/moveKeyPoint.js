var $ = require('jquery');
require('jquery-ui');
import collectKeyPoint from './collectKeyPoint'
import collectPost from './collectPost'
import editPost from './editPost'
import editStageName from './editStageName'

module.exports= () => {
	$('.keyPoint').not('.addBtn').draggable({ axis: "x",containment:'#keyPointDiv',stop: collectKeyPoint });
	$('.keyPoinNote').draggable({ axis: "y",stop: collectKeyPoint });
	$('.draggable').draggable({
    containment:'body',
    scroll: false,
		stop: collectPost,
    drag: function(e){
      let windowHeight= window.innerHeight,top, ele=e.target;
      top= $(ele).css('top'),windowHeight*=0.4;
      if(parseInt(top) > windowHeight){
        $(ele).find('.header').css('backgroundColor','red')
      }else{
        $(ele).find('.header').css('backgroundColor','blue')
      }
    }
	})

	$('.post').on('dblclick',(event)=>{
  		let ele= event.target
  		if($(ele).hasClass('header') || $(ele).hasClass('body') ){
  			ele= $(ele).closest('.post')
  		}
  		editPost(ele);
  		$(ele).addClass('edit');

  	})
  $('.nameInfo').on('dblclick',editStageName);

  $('.keyPoint').not('.addBtn').dblclick(function(e){
    var ele= e.target
    if( $(ele).hasClass('keyPoint') ){
      $.ajax({
          url:'/keypoints/'+ele.id,
          method:'DELETE'
        })
      $(ele).remove();
    }
  })
}


