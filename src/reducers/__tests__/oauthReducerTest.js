import { oauthReducer } from "../oauthReducer";
import { Actions } from "../../actions/userActions";

describe("Oauth Reducer", () => {
  it("should return the initial state", () => {
    expect(oauthReducer(undefined, { type: "abc" })).toEqual(null);
  });

  it("should handle LOGIN action type", () => {
    const jagrUsername = "jaromirjagr";
    const jagrToken = "jagrstoken";
    expect(
      oauthReducer([], {
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
