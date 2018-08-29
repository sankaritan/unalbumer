import { filterUnorganizedPhotos } from "../selectors";
import allPhotosMock from "../api/mocks/allPhotos.json";
import photosInAlbumsSelectorMock from "../api/mocks/photosInAlbumsSelector.json";

describe("Photos Selector", () => {
  it("should return array of unorganized photos", () => {
    const unorganizedPhotos = filterUnorganizedPhotos(
      allPhotosMock.mediaItems,
      photosInAlbumsSelectorMock
    );
    const expectedResult = [
      {
        baseUrl: "https://via.placeholder.com/150x150",
        filename: "this-photo-is-cool.jpg",
        id:
          "AGj1epVk7088S-nOUbNMzdv_x7tpSEqobdyRLdh50alasdQ-eSizgtNGY4ItwAvBEyLYiufW-SR0yaU",
        mediaMetadata: {
          creationTime: "2018-08-24T15:29:40Z",
          height: "881",
          photo: {},
          width: "881"
        },
        mimeType: "image/jpeg",
        productUrl:
          "https://photos.google.com/lr/photo/AGj1epalasd8S-nOUbNMzdv_x7tpSEqobdyRLdh50slNEnQ-eSizgtNGY4ItwAvBEyLYiufW-SR0yaU"
      },
      {
        baseUrl: "https://via.placeholder.com/150x150",
        filename: "IMG_20180816_103841.jpg",
        id:
          "AGj1epU_-wtiwBcXq3gltqPpNIlBMPY4w5185-61X0diFalasdqPWIjkxMv3Uy8jK_OLm-4lke1kfPQ8",
        mediaMetadata: {
          creationTime: "2018-08-16T14:38:41Z",
          height: "4032",
          photo: {},
          width: "3024"
        },
        mimeType: "image/jpeg",
        productUrl:
          "https://photos.google.com/lr/photo/AGalasd_-wtiwBcXq3gltqPpNIlBMPY4w5185-61X0diFiT8oqPWIjkxMv3Uy8jK_OLm-4lke1kfPQ8"
      }
    ];

    expect(unorganizedPhotos).toEqual(expectedResult);
  });

  it("should return no photos if all photos are in albums", () => {
    const unorganizedPhotos = filterUnorganizedPhotos(
      photosInAlbumsSelectorMock,
      photosInAlbumsSelectorMock
    );
    expect(unorganizedPhotos).toEqual([]);
  });
});
