import $ from 'jquery'
import postData from '../CRUD/postData'
class Helper{
	alertFn(){
		alert('Please fill in your github username to participate')
	}

	changeTitle(e){
	      let windowHeight= window.innerHeight,top, ele=e.target;
	      top= $(ele).css('top'),windowHeight*=0.4;
	      if(parseInt(top) > windowHeight){
	        $(ele).find('.header').css('backgroundColor','red')
	      }else{
	        $(ele).find('.header').css('backgroundColor','blue')
	      }
	}

	getGihub(username,callback){
		$.ajax({
			url:'https://api.github.com/users/'+username,
			method:'GET',
			success: (data)=>{
				callback(null,{url:data.avatar_url,name:data.name})
			}
		})
	}

	randomColor(){
	    var letters = '0123456789ABCDEF'.split('');
	    var color = '#';
	    for (var i = 0; i < 6; i++ ) {
	        color += letters[Math.floor(Math.random() * 16)];
	    }
	    return color;
	}

	draggableAll(post,keypoint) {
		$('.keyPoint').not('.addBtn').draggable({ axis: "x",containment:'#keyPointDiv',stop: keypoint.updateKP.bind(keypoint) });
		$('.keyPoinNote').draggable({ axis: "y",stop: keypoint.updateKP.bind(keypoint) });
		$('.draggable').draggable({
		    containment:'body',
		    scroll: false,
			stop: post.updatePost.bind(post),
		    drag: helper.changeTitleColor
		})
	    post.ableEdit();
	    $('.nameInfo').on('dblclick',keypoint.editStageName);
	    $('.postImg').click(post.showPost)
	    keypoint.ableDeleteKP();
	}

	initPage(post,keypoint) =>{
	  let points,that =this;
	  getData('/keypoints',(data) => {
	    points = data;
	    if(points.length){
	      points.forEach((point) => {
	        $('.addBtn.keyPoint').before( keypoint(point) )
	      })
	      that.draggableAll(post,keypoint);
	    }
	  })

	  getData('/posts', (data)=>{
	    if(data.length){
	        data.forEach( (post) =>{
	          $('#body').append( postTemp(post) )
	        })
	        that.draggableAll(post,keypoint);
	    }
	  })
	}

	setUser(gitname,post){
		let that = this
	 	this.getGihub(gitname,(err,info)=>{
		  $('#user input').val(info.name)
		  $('#user img').attr('src',info.url)
		  $('#newpost').off('click',that.alertFn)
		  post.newPost(info)
		  that.moveKeyPoint()
		})
	}

	initEvents(post,keypoint) {
		let that= this
		$('.addBtn').dblclick(function(){
			$('#keyPointDiv').append( pointTemplate({tagid: Date.now().toString(), left: '87%', notePosition:'-50px', noteContent:'new point'}) );
			postData('/keypoints', keypoint.getKeyPointInfo($('.keyPoint').last()) )
			that.draggableAll(post,keypoint);
		})
		// initial the keyPoints are draggable
	    that.initPage(post,keypoint)
	    that.draggableAll(post,keypoint);
	    $('#newpost').on('click',that.alertFn)
	}

}

export default Helper