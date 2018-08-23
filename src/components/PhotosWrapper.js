import React, { Component } from "react";
import { connect } from "react-redux";
import { getAlbumsAction } from "../actions";

class PhotosWrapper extends Component {
  componentDidMount() {
    this.props.dispatch(getAlbumsAction(this.props.oauthToken)).catch(error => {
      // TODO add proper error handling
      console.log(error.message);
    });
  }

  getAllAlbums() {
    const albums = this.props.albums;
    return albums.map(album => <li key={album.title}>{album.title}</li>);
  }

  render() {
    return (
      <div>
        {this.props.loggedIn && this.props.albums ? (
          <ul>{this.getAllAlbums()}</ul>
        ) : (
          <div>
            <p>
              You seem to be logged out or you failed to fetch albums from
              Google!
            </p>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  oauthToken: state.user.oauthToken,
  loggedIn: state.user.loggedIn,
  albums: state.photos.albums
});

export default connect(mapStateToProps)(PhotosWrapper);
