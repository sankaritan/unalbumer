const filterUnorganizedPhotos = (allPhotos, photosInAlbums) => {
  let unorganizedPhotos = [];
  allPhotos.forEach(photo => {
    const photoFound = photosInAlbums.some(photoInAlbum => {
      return photo.id === photoInAlbum.id;
    });
    if (!photoFound) {
      unorganizedPhotos.push(photo);
    }
  });
  return unorganizedPhotos;
};

export default filterUnorganizedPhotos;
