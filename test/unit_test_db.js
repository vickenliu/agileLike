import db from '../data/db'
import chai from 'chai'
import mocha from 'mocha'
import Knex from 'knex'
import config from '../knexfile'
import chaiAsPromise from 'chai-as-promised'

chai.use(chaiAsPromise)

const testEnv= config['test']

const knex=Knex(testEnv) 
const should= chai.should()
const {assert,expect}= chai


const sampleKP={
	title:'vicken',
	body:'this is the text body',
	tagid:'2016',
	left:'34px',
	top:'20px',
	bgColor:'blue',
	url:'example.com'
}
const sampleKP2={
	title:'james',
	body:'this is the body',
	left:'35px',
	tagid:'2017',
	top:'20px',
	bgColor:'blue',
	url:'example.com'
}

describe('test db.js', function(){
	beforeEach(function(){
		console.log('hey, table is created')
		return knex.migrate.latest(testEnv)
			.then(function(){
				return knex('posts').insert(sampleKP)
			})
	});

	afterEach(function(){
		console.log('hey, table is dropped')
		return knex.migrate.rollback(testEnv)
	});


	describe('getAll',function(){
		it('returns with matching records',function(){
			return db.getAll('posts').should.eventually.have.length(1);
		})
		it('the result is same as add in',function(){
			db.getAll('posts').then(function(post){
				Object.keys(sampleKP).forEach(function(key){
					post[0][key].should.equal(sampleKP[key])
				})
			})

		})
	})
	describe('updateOne',function(){
		it('the result is same as updated',function(){
			db.updateKP('posts','2016',sampleKP2).then(function(){
				db.getAll('posts').then(function(post){
					Object.keys(sampleKP).forEach(function(key){
						post[0][key].should.equal(sampleKP2[key])
					})
				})
			})
		})
	})


	describe('deleteOne',function(){
		it('the specific item has been deleted',function(){
			db.deleteKP('posts','2016').then(function(){
				db.getAll('posts').should.eventually.have.length(0)
			})
		})
	})

	describe('addOne',function(){
		it('one has been added',function(){
			db.addOne('posts',sampleKP2).then(function(){
				db.getAll('posts').should.eventually.have.length(2)
			})
		})
	})


})
