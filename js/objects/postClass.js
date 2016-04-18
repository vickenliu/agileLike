import postData from '../CRUD/postData'
import detail from '../../views/detail.jade'
import $ from 'jquery'
class Post {
	ableEdit(){
	  $('.post').on('dblclick',(event)=>{
	  		let ele= event.target
	  		if($(ele).hasClass('header') || $(ele).hasClass('body') ){
	  			ele= $(ele).closest('.post')
	  		}
	  		this.editPost(ele);
	  })
	}

	editPost(ele){
	    if(this.checkUser(ele)){
		 	$(ele).addClass('edit');
			let header= $(ele).find('.header'),
				body=   $(ele).find('.body'); 
			$(body).find('.me').val($(ele).find('.postbody').text())
			$(ele).find("input[type='submit']").click( function(e){
				e.preventDefault();
				$(ele).find('.postbody').text( $(ele).find('.me').val() )

				$(ele).removeClass('edit')
				let id = $(ele).attr('id'),
					title= $(ele).find('.title').text(),
					body= $(ele).find('.postbody').text(),
					left= $(ele).css('left') || 0,
					top= $(ele).css('top') || 0;
				Post.updatePost(ele);
			})
		}
	}

	checkUser(ele){
		var value=$('#user input').val()
		return  ($(ele).find('.title').text() == value) || (value=='admin')
	}


	getPostInfo(ele){
		var tagid = $(ele).data('id'),
			title= $(ele).find('.title').text(),
			url= $(ele).find('img').attr('src'),
			body= $(ele).find('.postbody').text(),
			left= $(ele).css('left') || 0,
			top= $(ele).css('top') || 0,
			postColor= $(ele).css('backgroundColor'),
			bgColor= $(ele).find('.header').css('backgroundColor') || 'blue';

		return {tagid,title,body,left,top,bgColor,url,postColor};
	}

	updatePost(e){
		var ele= $(e.target);
		var that = this
		ele= ele || e;
		var {tagid}= that.getPostInfo(ele)
		socket.emit('change', that.getPostInfo(ele))
		postData('/posts/'+tagid, that.getPostInfo(ele))
	}

	showPost(e){
		var ele= $(e.target).closest('.post');
		$('#detail').empty().append( detail( this.getPostInfo(ele)))
	}

	creatPost(e){
		postData('/posts',this.getPostInfo(e));
	}

	newPost(info){
	  $('#newpost').click(() => {
		var tagid= Date.now().toString();
	    $('#body').prepend( postTemplate({tagid,title:info.name,body:'body',left:'80%',top:'20px',url:info.url}) )
	    //moveKeyPoint();   maybe dont need ?
	    $(".post[data-id="+tagid+"]").css('backgroundColor',helper.randomColor())
	    this.creatPost($(".post[data-id="+tagid+"]"));
	  })
	}
}

export default Post