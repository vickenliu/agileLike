import postData from '../CRUD/postData'
import detail from '../../views/detail.jade'
import postTemp from '../../views/postTemp.jade'


class Post {
	ableEdit(){
		var that =this
	  $('.post').on('dblclick',(event)=>{
	  		let ele= event.target
	  		if($(ele).hasClass('header') || $(ele).hasClass('body') ){
	  			ele= $(ele).closest('.post')
	  		}
	  		that.editPost(ele);
	  })
	}

	editPost(ele){
	    if(this.checkUser(ele)){
		 	$(ele).addClass('edit');
			let header= $(ele).find('.header'),
				body=   $(ele).find('.body'); 
			$(body).find('.me').val($(ele).find('.postbody').text())
			this.submitChange(ele)
		}
	}

	submitChange(ele){
		let that= this
		$(ele).find("input[type='submit']").click( function(e){
			e.preventDefault();
			$(ele).find('.postbody').text( $(ele).find('.me').val() )
			$(ele).removeClass('edit')
			let id = $(ele).attr('id'),
				title= $(ele).find('.title').text(),
				body= $(ele).find('.postbody').text(),
				left= $(ele).css('left') || 0,
				top= $(ele).css('top') || 0;
			that.updatePost(ele);
		})
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
		var ele= e.target;
		ele= ele || e;
		var info=this.getPostInfo(ele)
		var {tagid}= info
		socket.emit('change', info)
		postData('/posts/'+tagid, info)
	}

	showPost(e){
		var ele= $(e.target).closest('.post');
		$('#detail').empty().append( detail( this.getPostInfo(ele)))
	}

	creatPost(e){
		postData('/posts',this.getPostInfo(e));
	}

	newPost(info,helper,callback){
	  $('#newpost').click(() => {
		var tagid= Date.now().toString();
	    $('#body').prepend( postTemp({tagid,title:info.name,body:'body',left:'80%',top:'20px',url:info.url}) )
	    callback()
	    var ele=$(".post[data-id="+tagid+"]")
	    $(ele).css('backgroundColor',helper.randomColor())
	    this.creatPost(ele);
	  })
	}
}

export default Post