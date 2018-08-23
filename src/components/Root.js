import React, { Component } from "react";
import { connect } from "react-redux";
import { GoogleLogin } from "react-google-login";
import { loginUserAction } from "../actions";
import PhotosWrapper from "./PhotosWrapper";

class Root extends Component {
  loginSuccess = response => {
    const username = response.profileObj.name;
    const token = response.accessToken;
    this.props.dispatch(loginUserAction(username, token));
  };

  loginFailure = () => {
    // TODO handle Google login failure
  };

  render() {
    return (
      <div>
        {this.props.loggedIn ? (
          <div>
            <p>Logged in as {this.props.username}!</p>
            <PhotosWrapper />
          </div>
        ) : (
          <div>
            <h1>Log in with Google</h1>
            <GoogleLogin
              clientId="605618239676-78umvil4rmbv85r20bn38lkjbq06pamg.apps.googleusercontent.com"
              buttonText="Login"
              scope="https://www.googleapis.com/auth/photoslibrary.readonly"
              onSuccess={this.loginSuccess}
              onFailure={this.loginFailure}
            />
            <div id="google-login" />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  username: state.user.username,
  loggedIn: state.user.loggedIn
});

export default connect(mapStateToProps)(Root);
