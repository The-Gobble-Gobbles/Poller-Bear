const request = require('supertest');
const server = 'http://localhost:3000';
const path = require('path');
const { response } = require('express');
const bcrypt = require('bcryptjs');
const middleware = require('../server/middleware/userMiddleware.js');

describe('middlware encryption', () => {
  // create a mockfn that will simulate encryption
  const hashMock = jest.fn(() => {
    return {
      username: 'turkeyHash',
      password: 'gobbleHash'
    }
  });

  const dummyObj = {
    username: 'turkey',
    password: 'gobble'
  };
//passing in a string to .mock will copy the module in its entirety, except the functionality ;-)
  jest.mock('../server/middleware/userMiddleware.js');
  jest.mock('bcryptjs');

  bcrypt.compare(dummyObj.username, hashMock.username).mockResolvedValue(true);
  bcrypt.compare(dummyObj.password, hashMock.password).mockResolvedValue(true);
  
   // on return is a promise hashed value
   bcrypt.hash(dummyObj.username, 5).mockResolvedValue(hashMock.username);
   bcrypt.hash(dummyObj.password, 5).mockResolvedValue(hashMock.password);

   // if the plain username and password match the hashed version, should return true;



  it('hashInfo return hashed values of usernamea and password', () => {

    request(server)
      .post('/api/user/signup')
      .send(JSON.stringify(dummyObj))
      .end((err, res) => {
        expect(res.locals.username).tobe(hashMock.username);
        expect(res.locals.password).tobe(hashMock.password);
      })
    
  })

  // it block expect username&password to not be the same as the one
    // that got sent in the request body
})

