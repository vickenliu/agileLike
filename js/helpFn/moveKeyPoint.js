var $ = require('jquery');
require('jquery-ui');
import collectKeyPoint from './collectKeyPoint'
import collectPost from './collectPost'
import ableEditPost from './ableEditPost'
import editStageName from './editStageName'
import ableDeletePost from './ableDeletePost'
import changeTitleColor from './changeTitleColor'

module.exports= () => {
	$('.keyPoint').not('.addBtn').draggable({ axis: "x",containment:'#keyPointDiv',stop: collectKeyPoint });
	$('.keyPoinNote').draggable({ axis: "y",stop: collectKeyPoint });
	$('.draggable').draggable({
    containment:'body',
    scroll: false,
		stop: collectPost,
    drag: changeTitleColor
	})


  ableEditPost();

  $('.nameInfo').on('dblclick',editStageName);

  ableDeletePost();
}


