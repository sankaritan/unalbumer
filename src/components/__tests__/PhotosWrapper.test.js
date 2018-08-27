import React from "react";
import { PhotosWrapper } from "../PhotosWrapper";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

describe("Page Header component", () => {
  const mockDispatch = () => {
    return new Promise(() => {});
  };

  const testOptions = [
    {
      dispatch: mockDispatch,
      oauthToken: "token",
      loggedIn: true,
      photosInAlbums: [1, 2, 3],
      allPhotos: [1, 2, 3, 4, 5],
      unorganizedPhotos: [
        { id: 4, filename: "image4.png", baseUrl: "www.google.com" },
        { id: 5, filename: "image5.png", baseUrl: "www.google.com" }
      ],
      newAlbum: null
    },
    {
      dispatch: mockDispatch,
      oauthToken: "token",
      loggedIn: false,
      photosInAlbums: [1, 2, 3],
      allPhotos: [1, 2, 3, 4, 5],
      unorganizedPhotos: [
        { id: 4, filename: "image4.png", baseUrl: "www.google.com" },
        { id: 5, filename: "image5.png", baseUrl: "www.google.com" }
      ],
      newAlbum: null
    },
    {
      dispatch: mockDispatch,
      oauthToken: "token",
      loggedIn: true,
      photosInAlbums: [1, 2, 3],
      allPhotos: [1, 2, 3, 4, 5],
      unorganizedPhotos: [],
      newAlbum: { title: "title", productUrl: "https://www.album68.com/album" }
    }
  ];

  testOptions.forEach((props) => {
    it("PhotosWrapper renders correctly", () => {
      const component = shallow(<PhotosWrapper {...props} />).debug();
      expect(component).toMatchSnapshot();
    });
  });
});
