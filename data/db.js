
var config= require('../knexfile')
var knex= require('knex')(config[process.env.NODE_ENV || 'development'])

module.exports={
	getAll:function(table){
		return knex.select().table(table)
	},
	getOne: function(table,id){
		return knex(table).where('id',id)
	},
	updateOne: function(table,id,info){
		return knex(table).where('id',id).update(info)
	},
	updateKP: function(table,id,info){
		return knex(table).where('tagid','=',id).update(info)
	},
	deleteOne: function(table,id){
		return knex(table).where('id',id).del()
	},
	deleteKP: function(table,id){
		return knex(table).where('tagid',id).del()
	},
	addOne: function(table,info){
		return knex(table).insert(info)
	}
}