import { Actions, loginUserAction } from "../userActions";

describe("User Actions", () => {
  it("should create an action to log in user", () => {
    const username = "jaromirjagr";
    const token = "welcomeback";
    const expectedAction = {
      type: Actions.LOGIN_USER,
      payload: { token, username }
    };
    expect(loginUserAction(username, token)).toEqual(expectedAction);
  });
});
