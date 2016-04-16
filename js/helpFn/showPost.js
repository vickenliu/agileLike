import detail from '../../views/detail.jade'
import getPostInfo from './getPostInfo'
import $ from 'jquery'

module.exports= (e)=>{
	var ele= $(e.target).closest('.post');
	$('#detail').empty().append( detail( getPostInfo(ele)))
}