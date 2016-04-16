import $ from 'jquery'

module.exports=(ele)=>{
	var value=$('#user input').val()
	return  ($(ele).find('.title').text() == value) || (value=='admin')
}