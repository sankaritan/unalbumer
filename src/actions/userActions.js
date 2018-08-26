export const Actions = {
  LOGIN_USER: "LOGIN"
};

export const loginUserAction = (username, token) => {
  return {
    type: Actions.LOGIN_USER,
    payload: { username, token }
  };
};
