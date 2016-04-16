import $ from 'jquery'

module.exports=(ele) => {
	let tagid = $(ele).data('id'),
        left=$(ele).css('left') || 0,
        notePosition = $(ele).find('.keyPoinNote').css('top') || 0,
        noteContent = $(ele).find('.nameInfo').text() || 'stage name';

	return {tagid,left,notePosition,noteContent};
}
