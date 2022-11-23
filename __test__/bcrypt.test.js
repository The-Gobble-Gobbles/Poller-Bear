const request = require('supertest');
const server = 'http://localhost:3000';
const path = require('path');
const middlewareUser = require('../server/middleware/userMiddleware.js');
const { response } = require('express');
const bcrypt = require('bcryptjs');
const { hasUncaughtExceptionCaptureCallback } = require('process');

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

  jest.mock('middlewareUser');
  jest.mock('bcrypt');


  it(' pw and hashed pw match', () => {
    // on return is a promise hashed value
    bcrypt.hash(dummyObj.username, 5).mockResolvedValue(hashMock.username);
    bcrypt.hash(dummyObj.password, 5).mockResolvedValue(hashMock.password);

    // if the plain username and password match the hashed version, should return true;
    bcrypt.compare(dummyObj.username, hashMock.username).mockResolvedValue(true);
    bcrypt.compare(dummyObj.password, hashMock.password).mockResolvedValue(true);

    /**
     * am not sure if these should live otuside of this it block 
     * for reusability
     */
  })
  
  // it block expect username&password to not be the same as the one
    // that got sent in the request body
})