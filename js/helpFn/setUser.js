import $ from 'jquery'
import postTemplate from '../../views/postTemp.jade'
import moveKeyPoint from './moveKeyPoint'
import github from '../getGithub'


var setUser= (gitname) => {
	// $('#user input').fadeOut()
	github(gitname,(err,info)=>{
	  $('#user input').val(info.name)
	  $('#user img').attr('src',info.url)
	  $('#newpost').off('click');

      $('#newpost').click(() => {
	    if(user){
	        $('#body').prepend( postTemplate({id:Date.now(),title:info.name,body:'body',left:'20px',top:'20px',url:info.url}) )
	        moveKeyPoint();
	    }else{
	      alert('please enter your username')
	    }

	  })
	})
}

module.exports= {
	user,
	setUser
	}