var $ = require('jquery');

import postData from '../CRUD/postData'

function collectKeyPoint(){
  console.log('collecting data')
  let keyPoints=[];
  $('.keyPoint').not('.addBtn').each( (i,ele) => {
    let id=ele.id,
        left=$(ele).css('left') || 0,
        notePosition = $(ele).find('.keyPoinNote').css('top') || 0,
        noteContent = $(ele).find('.keyPoinNote').text() || 'stage name';
        keyPoints.push({id, left, notePosition, noteContent });
  })

  postData('/keypoints',{keyPoints});
}

module.exports= collectKeyPoint;
