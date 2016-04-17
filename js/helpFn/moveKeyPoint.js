var $ = require('jquery');
require('jquery-ui');
import updatePost from './updatePost'
import ableEditPost from './ableEditPost'
import editStageName from './editStageName'
import ableDeleteKP from './ableDeleteKP'
import changeTitleColor from './changeTitleColor'
import updateKP from './updateKP'
import showPost from './showPost'


module.exports= () => {
	$('.keyPoint').not('.addBtn').draggable({ axis: "x",containment:'#keyPointDiv',stop: updateKP });
	$('.keyPoinNote').draggable({ axis: "y",stop: updateKP });
	$('.draggable').draggable({
    containment:'body',
    scroll: false,
		stop: updatePost,
    drag: changeTitleColor
	})

  ableEditPost();

  $('.nameInfo').on('dblclick',editStageName);
  $('.postImg').click(showPost)

  ableDeleteKP();
}


