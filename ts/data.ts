/* exported data */
// interface ImgData {
//   artistTitle: string;
//   artworkTypeTitle: string;
//   imageId: string;
// }
// console.log('ImgData',ImgData)

async function fetchArtObjects(): Promise<void> {
  try {
    const response = await fetch('https://api.artic.edu/api/v1/artworks');
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data);
    // const imageUrl = artData.config.iiif_url;
    // const appendD = '/full/843,/0/default.jpg';

    // for (let i = 0; i < artData.length; i++) {
    //   const currentArtWork = artData[i];
    //   const url = `${imageUrl}${currentArtWork.image_id}${appendD}`;
    //   const $image = document.createElement('img');
    //   $image.setAttribute('src', url);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}
fetchArtObjects();

async function fetchPoetObjects(): Promise<void> {
  try {
    const response = await fetch('https://poetrydb.org/title/Sonnet');
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

fetchPoetObjects();
