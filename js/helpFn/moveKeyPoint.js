var $ = require('jquery');
require('jquery-ui/draggable');
require('jquery-ui/sortable');

module.exports= () => {
	$('.keyPoint').draggable({ axis: "x" });
	$('.keyPoinNote').draggable({ axis: "y" });
}