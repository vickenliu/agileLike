
import start from './objects/init'
require('jquery-ui/droppable')
import setUser from './objects/setUser'
require('../public/style/style.scss')

import Post from './objects/postClass'
const post=new Post

$(document).ready(function(){
  
  $('#bin').droppable({
  	drop: ableDeletePost
  })

  $('#userinput input').change(function(){
    setUser( $(this).val() );
    $('#landing').css('display','none');
    $('#body').show();
    $('#sideMenu').show()
    start()
  })

});

module.exports= user;



function ableDeletePost( event, ui ) {
    if(post.checkUser(ui.draggable)){
       let id= $(ui.draggable).data('id')
       $.ajax({
        url:'/posts/'+id,
        method:'DELETE'
       })
       socket.emit('delete', id)
       $(ui.draggable).remove()
     }else{
      alert('you are not the author')
     }
}
