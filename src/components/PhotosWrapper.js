import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getAllPhotosInAlbumsAction,
  getAllPhotosAction,
  createNewAlbumAction
} from "../actions/photosActions";
import { filterUnorganizedPhotos } from "../selectors/photosSelector";
import PropTypes from "prop-types";

export class PhotosWrapper extends Component {
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
    return photos.map((photo) => (
      <img className="photo-card" key={photo.id} src={photo.baseUrl} />
    ));
  }

  addToNewAlbum(title) {
    this.props
      .dispatch(
        createNewAlbumAction(
          this.props.oauthToken,
          this.props.unorganizedPhotos,
          title
        )
      )
      .catch((error) => {
        this.dataError = error.message;
      });
  }

  render() {
    return (
      <div>
        {this.props.loggedIn && !this.dataError ? (
          <div>
            <h3>All Unorganized Photos</h3>
            <button onClick={() => this.addToNewAlbum("Unalbumer 1")}>
              Create new album
            </button>
            {this.props.newAlbum && (
              <p>
                New empty album{" "}
                <a href={this.props.newAlbum.productUrl}>
                  <b>{this.props.newAlbum.title}</b>
                </a>{" "}
                was created.
              </p>
            )}
            <div>{this.getUnorganizedPhotos()}</div>
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
  unorganizedPhotos: PropTypes.array,
  newAlbum: PropTypes.object
};

const mapStateToProps = (state) => ({
  oauthToken: state.user.oauthToken,
  loggedIn: state.user.loggedIn,
  photosInAlbums: state.photos.photosInAlbums,
  allPhotos: state.photos.allPhotos,
  unorganizedPhotos: filterUnorganizedPhotos(
    state.photos.allPhotos,
    state.photos.photosInAlbums
  ),
  newAlbum: state.photos.newAlbum
});

export default connect(mapStateToProps)(PhotosWrapper);
