import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class ProfilePage extends Component {
  constructor() {
    super();
    this.loginAdmin = this.loginAdmin.bind(this);

    this.state = { redirect: false };
  }

  loginAdmin() {
    const username = window.localStorage.getItem('username');
    const password = window.localStorage.getItem('password');
    if (username !== 'admin' && password !== '12345') {
      this.setState({ redirect: true });
    }
  }

  goRedirect() {
    this.loginAdmin();
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    } 
  }

  render() {
    return (
      <>
      {this.goRedirect()}
      <h1 className="desc">
        Profile
      </h1>
      <div className="profile-content">
        <img src="https://cdn.pixabay.com/photo/2017/12/29/02/15/image-3046593_960_720.png" alt="blockchain"/>
      </div>
      </>
    );
  }
}

export default ProfilePage;