import $ from 'jquery'

module.exports= (ele) =>{
	let header= $(ele).find('.header'),
		body=   $(ele).find('.body'); 
	$(header).find('input').val($(header).find('.title').text())
	$(body).find('input').val($(body).find('.postbody').text())
	$(ele).find("input[type='submit']").click((e)=>{
		e.preventDefault();
		$(ele).removeClass('edit')
		$(header).find('.title').text( $(header).find('input').val() )
		$(body).find('.postbody').text( $(body).find('input').val() )
		let id = ele.id,
			title= $(ele).find('.title').text(),
			body= $(ele).find('.postbody').text(),
			left= $(ele).css('left') || 0,
			top= $(ele).css('top') || 0;
		postData('/posts/'+id, {id,title,body,left,top});
	})

}
