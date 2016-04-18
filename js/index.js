var $ = require('jquery')
import start from './objects/init'
require('jquery-ui/droppable')
import setUser from './objects/setUser'
require('../public/style/style.scss')

import Post from './objects/postClass'
const post=new Post

$(document).ready(function(){
  start()
  $('#bin').droppable({
  	drop: ableDeletePost
  })

  $('#user input').change(function(){

    setUser( $(this).val() );
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
       $(ui.draggable).remove()
     }else{
      alert('you are not the author')
     }
}
