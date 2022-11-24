const request = require('supertest');
const server = 'http://localhost:3000';
const path = require('path');
const { response } = require('express');
const bcrypt = require('bcryptjs');
const middleware = require('../server/middleware/userMiddleware.js');
const { hashInfo } = require('../server/middleware/userMiddleware.js');
const dbtester = require('../server/db/dbtester.js');


describe('middlware encryption', () => {
  // create a mockfn that will simulate encryption
  const hashMock = {
      username: 'turkeyHash',
      password: 'gobbleHash'
    };

  const dummyObj = {
    username: 'turkey',
    password: 'gobble'
  };
//passing in a string to .mock will copy the module in its entirety, except the functionality ;-)
  jest.mock('../server/middleware/userMiddleware.js');
  jest.mock('bcryptjs');

  // bcrypt.compare(dummyObj.username, hashMock.username).mockResolvedValue(true);
  // bcrypt.compare(dummyObj.password, hashMock.password).mockResolvedValue(true);
  
   // on return is a promise hashed value
   const userRes =  bcrypt.hash(dummyObj.username, 5);
   const passRes = bcrypt.hash(dummyObj.password, 5);


   // if the plain username and password match the hashed version, should return true;
   

  it('should return hashed obj when given an obj', async () => {
    // extract dummyObj.username and password, and expect them to be strings
    const result = await middleware.hashHelper(dummyObj);
    const { username, password } = result;
    expect(username).toEqual(expect.any(String));
    expect(password).toEqual(expect.any(String));
    // expect(middleware.hashHelper(dummyObj)).resolves.toBe(hashMock);
  })


  it('should write to dbtester filer', async () => {
    // before this... the dbTest should have length current
    const temp = dbtester.length;
    const result = await middleware.sendHashToDB();
    expect(temp).toBe(temp + 1);
    
    // Now, the dbTest should have length plus 1
  })
  /**
   * database sending..
   * 
   * write to a local obj, and make sure that after invoking middleware hashinfo
   * the local obj is then filled up with a {username: username, password: password}
   * 
   * 
   * before invoking hashInfo, the items should NOT be in the database
   * invoke hashInfo
   * the items expected should now be in the database
   * 
   */





  xit('hashInfo return hashed values of usernamea and password', () => {

    request(server)
      .post('/api/user/signup')
      .send(JSON.stringify(dummyObj))
      .end((err, res) => {
        expect(res.locals.username).tobe(hashMock.username);
        expect(res.locals.password).tobe(hashMock.password);
      })
    const { username, password } = dummyObj;
      //expect hashInfo(dummyObj) to be hashMock
    const req = {
      body: {
        username: username,
        password: password
      }
    }


  })

  
  // it block expect username&password to not be the same as the one
    // that got sent in the request body
})

