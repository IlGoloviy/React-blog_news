import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = { redirect: false };
  }

  handleSubmit(e) {
    e.preventDefault();
    const username = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    window.localStorage.setItem('username', username);
    window.localStorage.setItem('password', password);

    if (username === 'admin' && password === '12345') {
      console.log('vu avtorizovani v sisteme');
      this.setState({ redirect: true, login: 'yes' });
    } else {
      console.log('chto to poshlo ne tak');
      this.setState({ redirect: true, login: 'no' });
    }

    e.target.elements[0].value = '';
    e.target.elements[1].value = '';
  }

  goRedirect() {
    if (this.state.redirect && this.state.login === 'yes') {
      return <Redirect to="/profile" />;
    } else if (this.state.redirect && this.state.login === 'no') {
      return (
        <h3 className="invalid">Invalid login or password</h3>
      );
    }
  }

  render() {
    return (
      <>
      <div className="block-login">
        <form className="form-login" onSubmit={this.handleSubmit}>
          {this.goRedirect()}
          <input type="text" placeholder="username"/>
          <input type="password" placeholder="password"/>
          <button type="submit">Enter</button>
        </form>
      </div>
      </>
    );
  }
  
}
