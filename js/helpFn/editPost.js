import $ from 'jquery'
import postData from '../CRUD/postData'
import checkUser from './checkAuthor'

module.exports= (ele) =>{
 if(checkUser(ele)){
 	$(ele).addClass('edit');
	let header= $(ele).find('.header'),
		body=   $(ele).find('.body'); 
	$(header).find('input').val($(ele).find('.title').text())
	$(body).find('.me').val($(ele).find('.postbody').text())
	$(ele).find("input[type='submit']").click( function(e){
		e.preventDefault();
		$(ele).find('.title').text( $(header).find('input').val() )
		$(ele).find('.postbody').text( $(ele).find('.me').val() )

		$(ele).removeClass('edit')
		let id = $(ele).attr('id'),
			title= $(ele).find('.title').text(),
			body= $(ele).find('.postbody').text(),
			left= $(ele).css('left') || 0,
			top= $(ele).css('top') || 0;
		postData('/posts/'+id, {id,title,body,left,top});
	})
 }
}
