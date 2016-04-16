import $ from 'jquery'


module.exports= (username,callback) => {
	$.ajax({
		url:'https://api.github.com/users/'+username,
		method:'GET',
		success: (data)=>{
			callback(null,{url:data.avatar_url,name:data.name})
		}
	})
}