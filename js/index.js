var $ = require('jquery')
import start from './helpFn/init'
require('jquery-ui/droppable')
import checkUser from './helpFn/checkAuthor'
import setUser from './helpFn/setUser'

$(document).ready(function(){
  start()
  $('#bin').droppable({
  	drop: function( event, ui ) {
    if(checkUser(ui.draggable)){
    	 let id= $(ui.draggable).attr('id')
    	 $.ajax({
    	 	url:'/posts/'+id,
    	 	method:'DELETE'
    	 })
    	 $(ui.draggable).remove()
     }
  	}
  })

  $('#user input').change(function(){

    setUser( $(this).val() );
  })
});

module.exports= user;




