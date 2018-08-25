import React, { Component } from "react";
import { connect } from "react-redux";
import { GoogleLogin } from "react-google-login";
import { loginUserAction } from "../actions";
import PhotosWrapper from "./PhotosWrapper";
import PageHeader from './PageHeader';
import PropTypes from "prop-types";

class Root extends Component {
  loginSuccess = (response) => {
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
          <PageHeader/>
        {this.props.loggedIn ? (
          <div>
            <p>Logged in as {this.props.username}!</p>
            <PhotosWrapper />
          </div>
        ) : (
          <div>
            <GoogleLogin
              clientId="493662417086-dsm3ap89a5uvlv28sn9f7qu19fi7k26p.apps.googleusercontent.com"
              scope="https://www.googleapis.com/auth/photoslibrary"
              onSuccess={this.loginSuccess}
              onFailure={this.loginFailure}
              className={ 'button' }
            />
            <div id="google-login" />
          </div>
        )}
      </div>
    );
  }
}

Root.propTypes = {
  dispatch: PropTypes.func,
  username: PropTypes.string,
  loggedIn: PropTypes.bool
};

const mapStateToProps = (state) => ({
  username: state.user.username,
  loggedIn: state.user.loggedIn
});

export default connect(mapStateToProps)(Root);
