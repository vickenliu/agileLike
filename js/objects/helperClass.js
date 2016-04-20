import keypoint from '../../views/keypoint.jade'
import postTemp from '../../views/postTemp.jade'

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

}

export default Helper