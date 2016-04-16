import $ from 'jquery'
import editPost from './editPost'

module.exports= () =>{

  $('.post').on('dblclick',(event)=>{
  		let ele= event.target
  		if($(ele).hasClass('header') || $(ele).hasClass('body') ){
  			ele= $(ele).closest('.post')
  		}
  		editPost(ele);
  })
}