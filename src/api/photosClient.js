import axios from "axios";

export const getAllAlbums = async token => {
  let authHeader = {
    Authorization: `Bearer ${token}`
  };
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

// CREATE ALBUM

// POST https://photoslibrary.googleapis.com/v1/albums
// Content-type: application/json
// Authorization: Bearer OAUTH2_TOKEN
