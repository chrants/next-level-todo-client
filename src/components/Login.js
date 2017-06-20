import React, { Component } from 'react';

import logo from '../logo.svg';
import './Login.css';

const Header = () => {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
  );
};

const LoginForm = () => {
  return (
    <form autocomplete="off">
      <input type="text" name="name" required="true" />
      <input type="text" name="email" required="true" />
      <button type="submit">Log In</button>
    </form>
  );
}

class Login extends Component {
  render() {
    return (
      <div>
        <Header />
        <LoginForm />
      </div>
    );
  }
}

export default Login;
