import $ from 'jquery'
import postData from '../CRUD/postData'
import getPostInfo from './getPostInfo'

module.exports=(e) => {
	var ele= e.target;
	ele= ele || e;
	var {tagid}= getPostInfo(ele)
	socket.emit('change',getPostInfo(ele))
	postData('/posts/'+tagid,getPostInfo(ele));
}