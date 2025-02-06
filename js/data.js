'use strict';
// interface Data {
//   view: string;
//   favorite: ArtObject[];
//   nextEntryId: number;
// }
let artData = [];
async function fetchArtObjects() {
  let nextUrl = [];
  try {
    const response = await fetch(
      `https://api.artic.edu/api/v1/artworks?limit=100`,
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const imageData = await response.json();
    nextUrl = [...imageData.data];
    for (let i = 2; i < 5; i++) {
      const response = await fetch(
        `https://api.artic.edu/api/v1/artworks?page=${i}&limit=100`,
      );
      const dataImage = await response.json();
      nextUrl = [...nextUrl, ...dataImage.data];
    }
    artData = nextUrl.map((item) => ({
      artistTitle: item.artist_title,
      artworkType: item.artwork_type_title,
      artTitle: item.title,
      imageId: item.image_id,
      imageUrl: `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`,
    }));
    const validImages = artData.filter((item) => {
      if (!item.imageId) {
        return false;
      }
      return true;
    });
    artData = [...validImages];
  } catch (error) {
    console.error('An error occurred:', error);
  }
}
fetchArtObjects();
function imageCreator() {
  artData = artData.map((item) => ({
    artistTitle: item.artistTitle,
    artworkType: item.artworkType,
    artTitle: item.artTitle,
    imageId: item.imageId,
    imageUrl: `https://www.artic.edu/iiif/2/${item.imageId}/full/843,/0/default.jpg`,
  }));
}
imageCreator();
