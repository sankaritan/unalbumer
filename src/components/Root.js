import React, { Component } from "react";
import { connect } from "react-redux";
import { GoogleLogin } from "react-google-login";
import { loginUserAction } from "../state/ducks/user/actions";
import Photos from "./Photos";
import Header from "./Header";
import PropTypes from "prop-types";

export class Root extends Component {
  renderLogin() {
    if (process.env.REACT_APP_MOCKS) {
      // skip login if mocks are enabled
      this.loginSuccess({
        profileObj: { name: "Jaromir Jagr" },
        accessToken: "dummyToken"
      });
    } else {
      return (
        <div>
          <GoogleLogin
            clientId="493662417086-dsm3ap89a5uvlv28sn9f7qu19fi7k26p.apps.googleusercontent.com"
            scope="https://www.googleapis.com/auth/photoslibrary"
            onSuccess={this.loginSuccess}
            onFailure={this.loginFailure}
            className={"button"}
          />
          <div id="google-login" />
        </div>
      );
    }
  }

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
        <Header />
        {this.props.loggedIn ? (
          <div>
            <p>Logged in as {this.props.username}!</p>
            <Photos />
          </div>
        ) : (
          <div>{this.renderLogin()}</div>
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
