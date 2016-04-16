var $ = require('jquery');

import postData from '../CRUD/postData'

function collectKeyPoint(){
  console.log('collecting keypoints data')
  $('.keyPoint').not('.addBtn').each( (i,ele) => {
    let left=$(ele).css('left') || 0,
        notePosition = $(ele).find('.keyPoinNote').css('top') || 0,
        noteContent = $(ele).find('.nameInfo').text() || 'stage name';
        postData('/keypoints',{left, notePosition, noteContent });
  })

  
}

module.exports= collectKeyPoint;
