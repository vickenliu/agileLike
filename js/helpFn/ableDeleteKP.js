import $ from 'jquery'

module.exports=() => {
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