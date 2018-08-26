import axios from "axios";

const BASE_URL = "https://photoslibrary.googleapis.com";

export const Endpoints = {
  ALBUMS: `${BASE_URL}/v1/albums`,
  MEDIA_ITEMS: `${BASE_URL}/v1/mediaItems`,
  MEDIA_ITEMS_SEARCH: `${BASE_URL}/v1/mediaItems:search`
};

const getAuthHeader = (token) => ({ Authorization: `Bearer ${token}` });

const getAllPages = async (
  token,
  requestUrl,
  limit,
  pageSize,
  responseItemKey
) => {
  const authHeader = getAuthHeader(token);
  let hasAllItems = false;
  let collectedItems = [];
  let nextPageToken = null;
  while (!hasAllItems) {
    // construct request parameters
    let requestParams = {
      pageSize: pageSize,
      pageToken: nextPageToken
    };

    // call the api endpoint
    const response = await axios.get(requestUrl, {
      params: requestParams,
      headers: authHeader
    });

    // collected items
    collectedItems.push(...response.data[responseItemKey]);

    // are there more albums? (next page exists?)
    if (response.data.nextPageToken && collectedItems.length <= limit) {
      nextPageToken = response.data.nextPageToken;
    } else {
      hasAllItems = true;
    }
  }

  // return all collected albums
  return collectedItems;
};

export const getAllAlbums = async (token, limit = 5) => {
  return await getAllPages(
    token,
    Endpoints.ALBUMS,
    limit,
    5,
    "albums"
  );
};

export const getPhotosInAlbum = async (token, albumId) => {
  let payload = {
    pageSize: 500,
    albumId: albumId
  };
  const response = await axios.post(
    Endpoints.MEDIA_ITEMS_SEARCH,
    payload,
    { headers: getAuthHeader(token) }
  );
  return response;
};

export const getAllPhotos = async (token, limit = 50) => {
  return await getAllPages(
    token,
    Endpoints.MEDIA_ITEMS,
    limit,
    50,
    "mediaItems"
  );
};

const createNewAlbum = async (token, albumTitle) => {
  let payload = {
    album: { title: albumTitle }
  };
  const response = await axios.post(
    Endpoints.ALBUMS,
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
