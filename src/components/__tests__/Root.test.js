import React from "react";
import { Root } from "../Root";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

describe("Root component", () => {
  const testOptions = [
    {
      dispatch: jest.fn(),
      username: "jardajagr",
      loggedIn: true
    },
    {
      dispatch: jest.fn(),
      username: null,
      loggedIn: false
    }
  ];

  testOptions.forEach((props) => {
    it("Root renders correctly", () => {
      const component = shallow(<Root {...props} />).debug();
      expect(component).toMatchSnapshot();
    });
  });
});
