import $ from 'jquery'
import postTemplate from '../../views/postTemp.jade'
import moveKeyPoint from './moveKeyPoint'
import github from '../getGithub'
import createPost from './createPost'
import alertFn from './alertFn.js'

var setUser= (gitname) => {
	// $('#user input').fadeOut()
 	github(gitname,(err,info)=>{
	  $('#user input').val(info.name)
	  $('#user img').attr('src',info.url)
		$('#newpost').off('click',alertFn)
      $('#newpost').click(() => {
    	var tagid= Date.now().toString();
	    $('#body').prepend( postTemplate({tagid,title:info.name,body:'body',left:'80%',top:'20px',url:info.url}) )
	    moveKeyPoint();
	    createPost($(".post[data-id="+tagid+"]"));
	  })
	})
}

module.exports= setUser
