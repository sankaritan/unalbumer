import { photosReducer } from "../photosReducer";
import { Actions } from "../../actions/photosActions";
import albumsMock from "../../actions/mocks/albums.json";
import allPhotosMock from "../../actions/mocks/allPhotos.json";
import photosInAlbumsMock from "../../actions/mocks/photosInAlbums.json";
import createNewAlbumMock from "../../actions/mocks/createNewAlbum.json";

describe("Photos Reducer", () => {
  it("should return the initial state", () => {
    expect(photosReducer(undefined, { type: "abc" })).toEqual(null);
  });

  it("should handle GET_ALBUMS action type", () => {
    expect(
      photosReducer([], {
        type: Actions.GET_ALBUMS,
        payload: albumsMock.albums
      })
    ).toEqual({
      albums: albumsMock.albums
    });
  });

  it("should handle GET_ALL_PHOTOS action type", () => {
    expect(
      photosReducer([], {
        type: Actions.GET_ALL_PHOTOS,
        payload: allPhotosMock.mediaItems
      })
    ).toEqual({
      allPhotos: allPhotosMock.mediaItems
    });
  });

  it("should handle GET_ALL_PHOTOS_IN_ALBUMS action type", () => {
    expect(
      photosReducer([], {
        type: Actions.GET_ALL_PHOTOS_IN_ALBUMS,
        payload: photosInAlbumsMock.mediaItems
      })
    ).toEqual({
      photosInAlbums: photosInAlbumsMock.mediaItems
    });
  });

  it("should handle CREATE_NEW_ALBUM action type", () => {
    expect(
      photosReducer([], {
        type: Actions.CREATE_NEW_ALBUM,
        payload: createNewAlbumMock
      })
    ).toEqual({
      newAlbum: createNewAlbumMock
    });
  });
});