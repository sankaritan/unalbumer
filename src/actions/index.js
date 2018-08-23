import { getAllAlbums } from '../api/photosClient';

export const Actions = {
  LOGIN_USER: "LOGIN",
  LOGOUT_USER: "LOGOUT",
  GET_ALBUMS: "GET_ALBUMS",
};

export const loginUserAction = (username, token) => {
  return {
    type: Actions.LOGIN_USER,
    payload: { username, token }
  };
};

export const logoutUserAction = () => {
  return { type: Actions.LOGOUT_USER };
};

export const getAlbumsAction = (token) => {
    return async dispatch => {
        const albums = await getAllAlbums(token);
        dispatch({
            type: Actions.GET_ALBUMS,
            payload: albums,
        })
    }
  };