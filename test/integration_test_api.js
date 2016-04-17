import app from '../app'
import request from 'supertest'
import chai from 'chai'
import mocha from 'mocha'
import Knex from 'knex'
import config from '../knexfile'
const testEnv= config['test']
const knex=Knex(testEnv) 
const should= chai.should()
const {assert,expect,done}= chai

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
describe('TESTING APIS',function(){
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

	describe('GET/posts',function(){
		it('response with a json',function(){
			request(app)
			 .get('/posts')
			 .set('Accept','application/json')
			 .expect('Content-Type',/json/)
			 .expect(200)
			 .end(function(err,res){
		 		Object.keys(sampleKP).forEach(function(key){
					res.body[0][key].should.equal(sampleKP[key])
				})
			 });
		})
	})

	describe('POST/posts',function(){
		it('added a new item',function(){
			request(app)
			 .post('/posts')
			 .send(sampleKP2)
			 .expect(201)
			 .end(function(err,res){
		 		request(app)
		 		 .get('/posts')
		 		 .end(function(err,res){
		 		 	res.body.length.should.equal(2);
		 		 })
			 });
		})
	})

	describe('POST/posts/:id',function(){
		it('updated a existing item',function(){
			request(app)
			 .post('/posts/'+sampleKP.tagid)
			 .send(sampleKP2)
			 .expect(201)
			 .end(function(err,res){
		 		request(app)
		 		 .get('/posts')
		 		 .end(function(err,res){
		 		 	res.body.length.should.equal(1);
			 		Object.keys(sampleKP).forEach(function(key){
						res.body[0][key].should.equal(sampleKP2[key])
					})
		 		 })
			 });
		})
	})

	describe('DELETE/posts/:id',function(){
		it('deleted a existing item',function(){
			request(app)
			 .delete('/posts/'+sampleKP.tagid)
			 .expect(201)
			 .end(function(err,res){
		 		request(app)
		 		 .get('/posts')
		 		 .end(function(err,res){
		 		 	res.body.length.should.equal(0);
		 		 })
			 });
		})
	})



})

