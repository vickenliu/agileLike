import $ from 'jquery'
import postData from '../CRUD/postData'
import getKeyPointInfo from './getKeyPointInfo.js'

module.exports=(e) => {
	var ele= e.target;
	ele= ele || e;
	var {tagid}= getKeyPointInfo(ele)
	console.log(getKeyPointInfo(ele))
	postData('/keypoints/'+tagid, getKeyPointInfo(ele) );
}