import $ from 'jquery'
import postData from '../CRUD/postData'

module.exports=() => {
	let posts=[],
		postsArr= $('.post');
	postsArr.each((i,ele)=>{
		let id = ele.id,
			title= $(ele).find('.title').text(),
			url= $(ele).find('img').attr('src'),
			body= $(ele).find('.postbody').text(),
			left= $(ele).css('left') || 0,
			top= $(ele).css('top') || 0,
			bgColor= $(ele).find('.header').css('backgroundColor') || 'blue';
		posts.push({id,title,body,left,top,bgColor,url});
	})
	postData('/posts',{posts});
}