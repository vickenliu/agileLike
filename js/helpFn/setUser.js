import $ from 'jquery'
import postTemplate from '../../views/postTemp.jade'
import moveKeyPoint from './moveKeyPoint'


var user
var setUser= (gitname) => {
	console.log(gitname)
	user=gitname

  $('#newpost').click(() => {
    console.log(user)
    if(user){
        $('#body').prepend( postTemplate({id:Date.now(),title:user,body:'body',left:'20px',top:'20px'}) )
        moveKeyPoint();
    }else{
      alert('please enter your username')
    }

  })
}

module.exports= {
	user,
	setUser
	}