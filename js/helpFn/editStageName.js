import $ from 'jquery'
import collectKeyPoint from './collectKeyPoint'

module.exports = (e) =>{
  let ele = $(e.target).closest('.keyPoinNote')
  $(ele).addClass('edit')
  $('.keyPoinNote').not(ele).addClass('friends')
  $('.pointName').change(function(){
  	$(this).focus()
  	if($(this).val()){
  		$(ele).find('.nameInfo').text($(this).val());
  		collectKeyPoint()
  	}
  	$(ele).removeClass('edit')
  	$('.keyPoinNote').not(ele).removeClass('friends')	
  })
  $(ele).find('.pointName').blur(function(){
  	$(ele).removeClass('edit')
  	$('.keyPoinNote').not(ele).removeClass('friends')
  })
}
