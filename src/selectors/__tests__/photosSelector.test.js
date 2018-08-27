import { filterUnorganizedPhotos } from "../photosSelector";
import allPhotosMock from "../../actions/mocks/allPhotos.json";
import photosInAlbumsSelectorMock from "../../actions/mocks/photosInAlbumsSelector.json";

describe("Photos Selector", () => {
  it("should return array of unorganized photos", () => {
    const unorganizedPhotos = filterUnorganizedPhotos(
      allPhotosMock.mediaItems,
      photosInAlbumsSelectorMock
    );
    const expectedResult = [
      {
        baseUrl:
          "https://lh3.googleusercontent.com/lr/AJ_cxalasdn6cfU9Qa85WNOMYkzEECVQzh-AUedWWMeEw1MV1Ac2i0ijG-3ZiKagmM-TJv_n4cAn4Ln_u-LamfeQqPADU8SBI59uKo6-Xk2HdDRaQqVytIjZaBLNJWkTWOhZrEqrEIFgzn_0BPkEagK5ScPpAU0_zAad4w5gA7lxkWV-ZCny_9sIaQ3fYAyGlqBT3b5-UpeAIMTwkDSJiitF9wHxnl5ePQhiJxQXxWPBqUtGYPhavkfr-NtfETn695sid7Kuxuy3jxfBMvhb5pX_7jHQVXGGXAKaD0nQ24f91Oqsp1use1bzFs2XRinMMrlO7SBSNlYOjgYj1djRGZGMl_e34BPc6b-eONAoSjtjLPav7-2oxeOEtZtmcoPSUMUVUbrZhP4Xff13o3wa4nU84KAwXHyNBu7xao8RTHOdLortvjTQbkrsjxiwusCdlXwAwXAN9AkM88uwm9yVMjzQdDpRqwWjV62sJsSox4YJGDuyUHU8Od846F_A7Nz7AGl4COdHa50znwwKxlnmqrb5NpggKpPF8grBu5DDMgd1_zf051990xb0Cc6NgDLZnDraQv_uedCMBXgDUj1be_r2dC4jpFkB-B-ibIMX3ySS-UzZnLKK7hV_JiIrBtLAkV9p7xsGdfVIIPuXFjQqj_RSRF8zhzQ8-yqVmLolxovDzuLr8ZPwEYk0ZJbUx2MV89iNd0WqfIvMXj0YyHR84n54FvhJsHPmbgH955_qRMtSqG5bXlJp2EtIrw5Zwt_5uWevCe3_6SAEr-iYjyt2dapeIH2BZIPOJmjqj8FCo4x4u2wep1BUQJ8n-bUTauoonVL7tNcP1p-cnUl1wGOISGLHCQaknnCA69-6vhxD4lY4wxpqjSDDQUh8Wr",
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
        baseUrl:
          "https://lh3.googleusercontent.com/lr/AJ_cxPYalasdqfppoMHFYoXiqH3lES6pCwJlywj6WkWUtX4ndMF5lLZbumjtNsguFT2QldDUOd4klQLH87wVsPHWTgrAk7zHRgrDnIuD6MhZbsNcBDavC9_YuoYfBHGNfMAbCMxSCA3iE1my6drJzgHVVfarYRft0LMb1G8d5jEbirxv-1UwUTEDjl9UH-ixGEBH0MbnAKsZei5mRhVNBNT7xXAseCMttOOJ8vX9wJBz4u4G-tfxxIvTC5OeQZM8q_7jJkyUrPkos3gh4dAj5l7bKGGsprf-VNRJteEmiMAXTlZ6wA_jkLv3yWk6zqL5UokgnIOi9aqfjnmTdT-41cNi_ToqhV8HUR-ioYfibcx0-exO_cDESFhyRgHOxJA5OmjDws-U6a7WoDKMmlAdtxfd7RfCvMqf6J4Z3f8ldLcgmSRVK86AJNcpEzYlS0h9J_45l07hWO4lV1Jo6sB6RQH7g3f2uFWb57D9olt3UzPieMp11Y9QULKiwQEcGBjbBIUDS_ItuWHD5pxFMKwxetl28COFpJZGU2A-EsyMjOpBEdIfHa4y7g4daTN9zt8lzNGpcLQtaUHJweVwbL6_HGN93mGMoycB1SIu7L90WGaQz2cBmuIjlFk3LVffB5MR3awu5GrkXMONt6zfkSc8n4hTg5D159tMO6BqXodQovnIIlxImWxlNTh1EhewxWgaQao1zACQVEX8YbqfqwqlVQthICJDavK9AhwUCxMCXpUtrRjatdagYkTmiYCjE5Ao1vATHVz3GN5Q8q3SoAE93FrhEfXHvmI71pfXgcLfD1C-r6LgaM2vA6mLm4bU_cLwIU6QYIJmf21lwnpXvRIbwB54RUM1LO97J3i9HnMB_K8Sy3NYBsaP_A-YA",
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
