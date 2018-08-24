import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllPhotosInAlbumsAction, getAllPhotosAction } from "../actions";
import filterUnorganizedPhotos from "../selectors/photosSelector";
import PropTypes from "prop-types";

class PhotosWrapper extends Component {
  dataError = null;

  componentDidMount() {
    this.props
      .dispatch(getAllPhotosInAlbumsAction(this.props.oauthToken))
      .catch((error) => {
        this.dataError = error.message;
      });

    this.props
      .dispatch(getAllPhotosAction(this.props.oauthToken))
      .catch((error) => {
        this.dataError = error.message;
      });
  }

  getUnorganizedPhotos() {
    const photos = this.props.unorganizedPhotos;
    return photos.map((photo) => <li key={photo.id}>{photo.filename}</li>);
  }

  getAllPhotosInAlbums() {
    const photos = this.props.photosInAlbums;
    return photos.map((photo) => <li key={photo.id}>{photo.filename}</li>);
  }

  getAllPhotos() {
    const photos = this.props.allPhotos;
    return photos.map((photo) => <li key={photo.id}>{photo.filename}</li>);
  }

  render() {
    return (
      <div>
        {this.props.loggedIn && !this.dataError ? (
          <div>
            <h2>Photos in Albums</h2>
            <ul>{this.getAllPhotosInAlbums()}</ul>
            <h2>All Photos</h2>
            <ul>{this.getAllPhotos()}</ul>
            <h2>All Unorganized Photos</h2>
            <ul>{this.getUnorganizedPhotos()}</ul>
          </div>
        ) : (
          <div>
            <p>
              You seem to be logged out or you failed to fetch data from Google!
            </p>
          </div>
        )}
      </div>
    );
  }
}

PhotosWrapper.propTypes = {
  dispatch: PropTypes.func,
  oauthToken: PropTypes.string,
  loggedIn: PropTypes.bool,
  photosInAlbums: PropTypes.array,
  allPhotos: PropTypes.array,
  unorganizedPhotos: PropTypes.array
};

const mapStateToProps = (state) => ({
  oauthToken: state.user.oauthToken,
  loggedIn: state.user.loggedIn,
  photosInAlbums: state.photos.photosInAlbums,
  allPhotos: state.photos.allPhotos,
  unorganizedPhotos: filterUnorganizedPhotos(
    state.photos.allPhotos,
    state.photos.photosInAlbums
  )
});

export default connect(mapStateToProps)(PhotosWrapper);
