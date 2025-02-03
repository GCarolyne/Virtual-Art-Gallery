/* exported data */
// interface ArtObject {
//   artistTitle: string;
//   artworkType: string;
//   artTitle: string;
//   imageId: string;
//   imageUrl: string;
// }
let artData: any = [];

async function fetchArtObjects(): Promise<void> {
  try {
    const response = await fetch(
      'https://api.artic.edu/api/v1/artworks?limit=100',
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const imageData = await response.json();
    artData = imageData.data;
    createUrl(artData[9]);
    console.log(artData);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}
fetchArtObjects();

function createUrl(imageObject: any): any {
  console.log(imageObject);
  const imageUrl = 'https://www.artic.edu/iiif/2';
  const imageId = imageObject.image_id;
  const fullUrl = `${imageUrl}/${imageId}/full/843,/0/default.jpg`;

  console.log(fullUrl);
}

// function imageCreator(searchResult: any): any {
//   const objectArt = artData.map((item) => ({
//     artistTitle: item.artist_title,
//     artworkType: item.artwork_type_title,
//     artTitle: item.title,
//     imageId: item.image_id,
//     imageUrl: createUrl(),
//   }));
//   console.log(objectArt);
// }
