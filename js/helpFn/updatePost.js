import $ from 'jquery'
import postData from '../CRUD/postData'
import getPostInfo from './getPostInfo'

module.exports=(e) => {
	var ele= e.target;
	ele= ele || e;
	var {id}= getPostInfo(ele)
	postData('/posts/'+id,getPostInfo(ele));
}