import React from "react";
import { App } from "../App";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

describe("App wrapper component", () => {
  it("App renders correctly", () => {
    const tree = shallow(<App />).debug();
    expect(tree).toMatchSnapshot();
  });
});
