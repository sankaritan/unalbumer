import React from "react";
import PageHeader from "../PageHeader";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe("Page Header component", () => {
it("PageHeader renders correctly", () => {
  const tree = shallow(<PageHeader />).debug();
  expect(tree).toMatchSnapshot();
});
});
