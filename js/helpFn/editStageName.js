import $ from 'jquery'
import updatePK from './updateKP'

module.exports = (e) =>{
  let ele = $(e.target).closest('.keyPoinNote')
      $(ele).addClass('edit')
      $('.keyPoinNote').not(ele).addClass('friends')
      $(ele).find('.pointName').change(function(){
        if($(this).val()){
          $(ele).find('.nameInfo').text($(this).val());
          updatePK(ele)
        }
        $(ele).removeClass('edit')
        $('.keyPoinNote').not(ele).removeClass('friends') 
      })
      $(ele).find('.pointName').blur(function(){
        $(ele).removeClass('edit')
        $('.keyPoinNote').not(ele).removeClass('friends')
      })
}
