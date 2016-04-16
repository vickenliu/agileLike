import $ from 'jquery'
import postData from '../CRUD/postData'
import getPostInfo from './getPostInfo'

module.exports=(e)=>{
	postData('/posts',getPostInfo(e));
}