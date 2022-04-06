let chai = require('chai');
let chaiHttp = require('chai-http')
var assert = require('assert');
const { request } = require('http');
let should = chai.should();
chai.use(chaiHttp);



describe('Test Post Status', function() {
    describe('Test Post delete status', function() {
        it('should respond with delete POST', function(done) {
            chai.request('http://localhost:3000')
                .post('/admin/article/delete/?id=32')
                .end((err, res) => {
                    res.should.have.status(200);
                    done()
                })
        })
    });
    describe('Test Post add status', function() {
        it('should respond with add POST', function(done) {
            chai.request('http://localhost:3000')
                .post('/admin/article/create')
                .send({ 'name': 'test35', 'slug': 'test35', 'image': '/images/placeholder35', 'body': 'hippity hoppity this is now my proppity35' })
                .end((err, res) => {
                    res.should.have.status(200);
                    done()
                })
        })
    });
    describe('Test Post update status', function() {
        it('should respond with Update POST', function(done) {
            chai.request('http://localhost:3000')
                .post('/admin/article/update/63')
                .send({ 'name': 'testUpdate', 'slug': 'testUpdate', 'image': '/images/placeholder35', 'body': 'hippity hoppity this is now my proppity35' })
                .end((err, res) => {
                    res.should.have.status(200);
                    done()
                })
        })
    });
});
/*
Check for POST EDIT
Check for POST DELETE
Check for POST ADD
let name = req.body.name
    let slug = req.body.slug
    let image = req.body.image
    let body = req.body.body
*/