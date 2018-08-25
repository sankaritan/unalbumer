import axios from "axios";

const getAuthHeader = (token) => ({ Authorization: `Bearer ${token}` });

export const getAllAlbums = async (token, limit = 5) => {
  const authHeader = getAuthHeader(token);
  let hasAllAlbums = false;
  let collectedAlbums = [];
  let nextPageToken = null;
  while (!hasAllAlbums) {
    // construct request parameters
    let requestParams = {
      pageSize: 5, // TODO - increase
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
    if (response.data.nextPageToken && collectedAlbums.length <= limit) {
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

export const getAllPhotos = async (token, limit = 50) => {
  const authHeader = getAuthHeader(token);
  let hasAllPhotos = false;
  let collectedPhotos = [];
  let nextPageToken = null;

  while (!hasAllPhotos) {
    // construct request parameters
    let requestParams = {
      pageSize: 50, // TODO increase
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
    if (response.data.nextPageToken && collectedPhotos.length <= limit) {
      nextPageToken = response.data.nextPageToken;
    } else {
      hasAllPhotos = true;
    }
  }

  // return all collected albums
  return collectedPhotos;
};

const createNewAlbum = async (token, albumTitle) => {
  let payload = {
    album: { title: albumTitle }
  };
  const response = await axios.post(
    "https://photoslibrary.googleapis.com/v1/albums",
    payload,
    { headers: getAuthHeader(token) }
  );
  return response;
};

// TODO - Not supported by API as of now
// const addPhotosToAlbum = async (token, existingAlbumId, photos) => {
//   let payload = {
//     albumId: existingAlbumId,
//     newMediaItems: photos
//   };
//   const response = await axios.post(
//     "https://photoslibrary.googleapis.com/v1/mediaItems:batchCreate",
//     payload,
//     { headers: getAuthHeader(token) }
//   );
//   return response;
// };

export const organizePhotos = async (token, photos, albumTitle) => {
  const album = await createNewAlbum(token, albumTitle);
  // TODO - Not supported by API as of now
  // await addPhotosToAlbum(token, album.data.id, photos);
  return album;
};
