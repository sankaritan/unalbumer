import userReducer from "../reducers";
import { Actions } from "../actions";

describe("Oauth Reducer", () => {
  it("should return the initial state", () => {
    expect(userReducer(undefined, { type: "abc" })).toEqual(null);
  });

  it("should handle LOGIN action type", () => {
    const jagrUsername = "jaromirjagr";
    const jagrToken = "jagrstoken";
    expect(
      userReducer([], {
        type: Actions.LOGIN_USER,
        payload: { username: jagrUsername, token: jagrToken }
      })
    ).toEqual({
      loggedIn: true,
      oauthToken: "jagrstoken",
      username: "jaromirjagr"
    });
  });
});
