const request = require('supertest');
const { internalIP } = require('webpack-dev-server');
const Login = require('../client/pages/Login.jsx').default;
const Route = require('../server/routers/userRouter.js')
const server = 'http://localhost:3000';
import React from 'React';
// import userEvent from '@testing-library/user-event'
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
//import clientLogin from '../client/pages/Login'//we already have this on line 3

//remember kids: anything that happens in jest is happens in the virtual dom. It's like Las Vegas, but for code
//need to click the button and see if we are correctly routed to the login page
describe('Login Button on Home Page', () => {
  let login;
  //before any tests are run, render the app
  beforeAll(() => {
    login = render(<Login />)
  });

  it('should send users to the login page once clicked', () => {
    expect(login).toBe(login);
  })
})