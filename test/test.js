var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('respond with test commit', function(done) {
    request(app).get('/').expect('The beach rocks!', done);
  });
});
