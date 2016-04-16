import $ from 'jquery'

module.exports=(ele) => {
	let tagid = $(ele).data('id'),
		title= $(ele).find('.title').text(),
		url= $(ele).find('img').attr('src'),
		body= $(ele).find('.postbody').text(),
		left= $(ele).css('left') || 0,
		top= $(ele).css('top') || 0,
		postColor= $(ele).css('backgroundColor'),
		bgColor= $(ele).find('.header').css('backgroundColor') || 'blue';

	return {tagid,title,body,left,top,bgColor,url,postColor};
}