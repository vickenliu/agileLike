
exports.up = function(knex, Promise) {
  return Promise.all([
  		knex.schema.createTableIfNotExists('keypoints', function (table) {
		  table.increments();
		  table.string('tagid');
		  table.string('left');
		  table.string('notePosition');
		  table.string('noteContent');
		  table.timestamps();
		}),
		knex.schema.createTableIfNotExists('posts', function (table) {
		  table.increments();
		  table.string('tagid');
		  table.string('title');
		  table.string('body');
		  table.string('left');
		  table.string('top');
		  table.string('bgColor');
		  table.string('url');
		  table.string('postColor');
		  table.timestamps();
		})
  	])
};

exports.down = function(knex, Promise) {
  return Promise.all([
  	knex.schema.dropTable('keypoints'),
  	knex.schema.dropTable('posts')
  ])
};
