import $ from 'jquery'
import postData from '../CRUD/postData'
import getKeyPointInfo from './getKeyPointInfo.js'

module.exports=(e) => {
	var ele= e.target;
    ele= ele || $(e).closest('.keyPoint')  
	$(ele).hasClass('keyPoinNote')? ele=$(ele).closest('.keyPoint') : ele;
	var {tagid}= getKeyPointInfo(ele)
	postData('/keypoints/'+tagid, getKeyPointInfo(ele) );
}