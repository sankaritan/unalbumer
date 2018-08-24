import axios from "axios";

const getAuthHeader = token => ({ Authorization: `Bearer ${token}` });

// TODO - generalize pagination function to remove duplicates in code
// const getAllPages = () => {

// }

export const getAllAlbums = async token => {
  const authHeader = getAuthHeader(token);
  let hasAllAlbums = false;
  let collectedAlbums = [];
  let nextPageToken = null;
  while (!hasAllAlbums) {
    // construct request parameters
    let requestParams = {
      pageSize: 50,
      pageToken: nextPageToken
    };

    // call the albums api
    const response = await axios.get(
      "https://photoslibrary.googleapis.com/v1/albums",
      {
        params: requestParams,
        headers: authHeader
      }
    );

    // collected albums
    collectedAlbums.push(...response.data.albums);

    // are there more albums? (next page exists?)
    if (response.data.nextPageToken) {
      nextPageToken = response.data.nextPageToken;
    } else {
      hasAllAlbums = true;
    }
  }

  // return all collected albums
  return collectedAlbums;
};

export const getPhotosInAlbum = async (token, albumId) => {
  let payload = {
    pageSize: 500,
    albumId: albumId
  };
  const response = await axios.post(
    "https://photoslibrary.googleapis.com/v1/mediaItems:search",
    payload,
    { headers: getAuthHeader(token) }
  );
  return response;
};

export const getAllPhotos = async token => {
  const authHeader = getAuthHeader(token);
  let hasAllPhotos = false;
  let collectedPhotos = [];
  let nextPageToken = null;

  while (!hasAllPhotos) {
    // construct request parameters
    let requestParams = {
      pageSize: 500,
      pageToken: nextPageToken
    };

    // call the albums api
    const response = await axios.get(
      "https://photoslibrary.googleapis.com/v1/mediaItems",
      {
        params: requestParams,
        headers: authHeader
      }
    );

    // collected albums
    collectedPhotos.push(...response.data.mediaItems);

    // are there more albums? (next page exists?)
    if (response.data.nextPageToken) {
      nextPageToken = response.data.nextPageToken;
    } else {
      hasAllPhotos = true;
    }
  }

  // return all collected albums
  return collectedPhotos;
};

export const createNewAlbum = async (token, albumTitle) => {
  let payload = {
    title: albumTitle
  };
  const response = await axios.post(
    "https://photoslibrary.googleapis.com/v1/albums",
    payload,
    { headers: getAuthHeader(token) }
  );
  return response;
};
