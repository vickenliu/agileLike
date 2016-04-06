
function addKeyPoint(){
	var div  = creatediv('div','keyPoint','+')
  div.id = Date.now();
	var note = creatediv('div','keyPoinNote noteUp','key point')

	div.appendChild(note);
	return div;
}


function creatediv(tag,className,text){
	var element = document.createElement(tag);
	element.className += className;
	element.innerHTML = text;
	return element;
}

module.exports=addKeyPoint;
