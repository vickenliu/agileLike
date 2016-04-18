import postData from '../CRUD/postData'
import $ from 'jquery'
import moveKeyPoint from './moveKeyPoint.js'

class Keypoint {
	ableDeleteKP(){
	  $('.keyPoint').not('.addBtn').dblclick(function(e){
	    var ele= e.target
	    if( $(ele).hasClass('keyPoint') ){
	      $.ajax({
	          url:'/keypoints/'+$(ele).data('id'),
	          method:'DELETE'
	        })
	      $(ele).remove();
	    }
	  })
	}

	editStageName(e){
	  let that = this
	  let ele = $(e.target).closest('.keyPoinNote')
	      $(ele).addClass('edit')
	      $('.keyPoinNote').not(ele).addClass('friends')
	      that.afterInput(ele,that)
	      that.lostFocus(ele)
	}

	afterInput(ele,obj){
	  $(ele).find('.pointName').change(function(){
        if($(this).val()){
          $(ele).find('.nameInfo').text($(this).val());
          obj.updateKP(ele,obj)
        }
        $(ele).removeClass('edit')
        $('.keyPoinNote').not(ele).removeClass('friends') 
      })
	}

	lostFocus(ele){
		$(ele).find('.pointName').blur(function(){
	        $(ele).removeClass('edit')
	        $('.keyPoinNote').not(ele).removeClass('friends')
	    })
	}

	updateKP(e){
		var ele= e.target;
	    ele= ele || $(e).closest('.keyPoint')  
		$(ele).hasClass('keyPoinNote')? ele=$(ele).closest('.keyPoint') : ele;
		var {tagid}= this.getKeyPointInfo(ele)
		socket.emit('KPchange', this.getKeyPointInfo(ele))
		postData('/keypoints/'+tagid, this.getKeyPointInfo(ele) );
	}

	getKeyPointInfo(ele) {
		let tagid = $(ele).data('id'),
	        left=$(ele).css('left') || 0,
	        notePosition = $(ele).find('.keyPoinNote').css('top') || 0,
	        noteContent = $(ele).find('.nameInfo').text() || 'stage name';

		return {tagid,left,notePosition,noteContent};
	}
}

export default Keypoint