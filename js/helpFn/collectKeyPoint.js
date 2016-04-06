var $ = require('jquery');

import postData from '../CRUD/postData'

function collectKeyPoint(){
  let keyPoints=[];
  $('.keyPoint').not('.addBtn').each( (i,ele) => {
    let id=ele.id,
        left=$(ele).position().left || 0,
        notePosition= $(ele).find('.keyPoinNote').position().top || 0;
        keyPoints.push({id, left, notePosition});
  })
  postData('/keypoints',{keyPoints});
}

module.exports= collectKeyPoint;
