import store from "../store";

describe("Store", () => {
  it("component renders correctly", () => {
    expect(store).toMatchSnapshot();
  });
});
