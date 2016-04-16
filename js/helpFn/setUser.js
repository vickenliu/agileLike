import $ from 'jquery'
import postTemplate from '../../views/postTemp.jade'
import moveKeyPoint from './moveKeyPoint'
import github from '../getGithub'
import createPost from './createPost'

var setUser= (gitname) => {
	// $('#user input').fadeOut()
 	github(gitname,(err,info)=>{
	  $('#user input').val(info.name)
	  $('#user img').attr('src',info.url)
      $('#newpost').click(() => {
    	var id= Date.now();
        $('#body').prepend( postTemplate({id,title:info.name,body:'body',left:'20px',top:'20px',url:info.url}) )
        moveKeyPoint();
        createPost($('#'+id));
	  })
	})
}

module.exports= setUser
