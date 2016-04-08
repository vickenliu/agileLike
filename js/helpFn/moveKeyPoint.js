var $ = require('jquery');
require('jquery-ui/draggable');
require('jquery-ui/sortable');
import collectKeyPoint from './collectKeyPoint'

module.exports= () => {
	$('.keyPoint').draggable({ axis: "x",stop: collectKeyPoint });
	$('.keyPoinNote').draggable({ axis: "y",stop: collectKeyPoint });
	$('.draggable').draggable({
		stop: collectKeyPoint
	})
}