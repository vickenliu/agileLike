var $ = require('jquery');
require('jquery-ui/draggable');
require('jquery-ui/sortable');
import collectKeyPoint from './collectKeyPoint'
import collectPost from './collectPost'
import editPost from './editPost'

module.exports= () => {
	$('.keyPoint').draggable({ axis: "x",stop: collectKeyPoint });
	$('.keyPoinNote').draggable({ axis: "y",stop: collectKeyPoint });
	$('.draggable').draggable({
		stop: collectPost
	})
	$('.post').on('dblclick',(event)=>{
  		let ele= event.target
  		if($(ele).hasClass('header') || $(ele).hasClass('body') ){
  			ele= $(ele).closest('.post')
  		}
  		editPost(ele);
  		$(ele).addClass('edit');

  	})
}