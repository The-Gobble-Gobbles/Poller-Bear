const request = require('supertest');
const { internalIP } = require('webpack-dev-server');
const Login = require('../client/pages/Login.jsx').default;
const Route = require('../server/routers/userRouter.js')
const server = 'http://localhost:3000';
import React from 'React';
// import userEvent from '@testing-library/user-event'
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
//import our userEvents to simulate user interactions
import userEvent from '@testing-library/user-event' // or const {default: userEvent} = require('@testing-library/user-event')
import {expect, jest, test} from '@jest/globals';

//remember kids: anything that happens in jest is happens in the virtual dom. It's like Las Vegas, but for code
//need to click the button and see if we are correctly routed to the login page
describe('Login Button on Home Page', () => {
  let login;
  //create a simulation of user events
  const user = userEvent.setup();
  //before any tests are run, render the app in the virtual DOM
  beforeAll(async () => {
    login = await render(<Login />)
  });
  //testing to see whether the onclick functionality actually works
  it('should send users to the login page once clicked', ()=> {
    //if you want to mock function calls in Jest you use jest.fn(). No args needed
    const clickedButton = jest.fn();
    // comparing mocked function results to real result
    expect(clickedButton()).toBe(<Link to='/login'></Link>);
  })
  it('should render the "Log In" h1 heading and the Google Log In button', async () => {
    expect(login.getByText('Login').nextSibling).toBeInstanceOf(button)
    await screen.findByRole('button', { name: 'Log in with Google' });
  })
})