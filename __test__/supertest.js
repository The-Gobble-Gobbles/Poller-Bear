const request = require('supertest');
// const CreatePoll = require('../client/pages/CreatePoll.jsx')
const server = 'http://localhost:3000';
const path = require('path');

beforeAll(done => {
  done();
})

afterAll(done => {
  done();
})

xdescribe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      // Note that we return the evaluation of `request` here! It evaluates to
      // a promise, so Jest knows not to say this test passes until that
      // promise resolves. See https://jestjs.io/docs/en/asynchronous
      //the test isn't run until the it statements
      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    });
  });
});


/**
 * this test should test for a working sign up route 
 * and middlware functionality for a user signing up
 */
describe('signup', () => {


  const dummyObj = {
    username: 'turkey',
    password: 'gobble'
  }

  //button should send post request
  //should return error if either field is empty
  //should contain username and password properties on body
  //should update database with new user


  // working blueprint --
  describe('POST', () => {
    it('responds with 200 status and appplication/JSON content type', async () => {
      await request(server)
      .post('/api/user/signup')
      .send(JSON.stringify(dummyObj))
      .expect('Content-Type', /application\/json/)
      .expect(200)

    })
  });






})





