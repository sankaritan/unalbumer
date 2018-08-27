import store from "..";

describe("Store", () => {
  it("PageHeader renders correctly", () => {
    expect(store).toMatchSnapshot();
  });
});
