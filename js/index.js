
import start from './objects/init'
import $ from 'jquery'
require('jquery-ui/droppable');
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

  $('img').hover(function(e){
    var id= $(e.target).data('nmb')
    $('.info[data-nmb='+id+']').show()
  }).mouseleave(function(e){
    var id= $(e.target).data('nmb')
    $('.info[data-nmb='+id+']').hide()
  })

  // $('#body').on('mouseenter','.post',function(e){
  //   var ele = $(e.target)
  //   $(e.target).hasClass('post')? ele : ele=$(ele).closest('.post')
  //   $(ele).append("<p class='intro'>Drag where you want to place<br/>Double click to edit</p>")
  // }).on('mouseleave','.post',function(e){
  //   var ele = $(e.target)
  //   $(e.target).hasClass('post')? ele : ele=$(ele).closest('.post')
  //   $(ele).find('p').remove()
  // })
  //
  // $('#keyPointDiv').on('mouseenter','.keyPoint',function(e){
  //   var ele = $(e.target)
  //   $(e.target).hasClass('keyPoint')? ele : ele=$(ele).closest('.keyPoint')
  //   $(ele).append("<p class='KPintro'>Drag pin vertical,text horizontal<br/>Double click text to edit</p>")
  // }).on('mouseleave','.keyPoint',function(e){
  //   var ele = $(e.target)
  //   $(e.target).hasClass('keyPoint')? ele : ele=$(ele).closest('.keyPoint')
  //   $(ele).find('p').remove()
  // })
  var elements=[{
    container:'#body',
    target:'.post',
    config:{
      className:'post',
      pContent:"<p class='intro'>Drag where you want to place<br/>Double click to edit</p>"
    }
  },{
    container:'#keyPointDiv',
    target:'.keyPoint.ui-draggable',
    config:{
      className:'keyPoint',
      pContent:"<p class='KPintro'>Drag stage-point horiz,text vertical<br/>Double click text to edit</p>"
    }
  }]
  function bindEvents({container,target,config}){
    $(container).on('mouseenter',target,function(e){
      var ele = $(e.target)
      $(e.target).hasClass(config.className)? ele : ele=$(ele).closest('.'+config.className)
      $(ele).append(config.pContent)
    }).on('mouseleave',target,function(e){
      var ele = $(e.target)
      $(e.target).hasClass(config.className)? ele : ele=$(ele).closest('.'+config.className)
      $(ele).find('p').remove()
    })
  }
  elements.forEach(bindEvents)

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
