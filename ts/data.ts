/* exported data */
interface ArtObject {
  artistTitle: string;
  artworkType: string;
  artTitle: string;
  imageId?: string;
  imageUrl: string;
}
let artData: ArtObject[] = [];

async function fetchArtObjects(): Promise<void> {
  try {
    const response = await fetch(
      'https://api.artic.edu/api/v1/artworks?limit=100',
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const imageData = await response.json();

    artData = imageData.data.map((item: any) => ({
      artistTitle: item.artist_title,
      artworkType: item.artwork_type_title,
      artTitle: item.title,
      imageId: item.image_id,
      imageUrl: `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`,
    }));

    const validImages = artData.filter((item: any) => {
      if (!item.imageId) {
        return false;
      }
      return true;
    });

    console.log(validImages);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}
fetchArtObjects();

// function createUrl(imageObject: ArtObject): void {
//   const imageUrl = 'https://www.artic.edu/iiif/2';
//   const imageId = imageObject.imageId;
//   const fullUrl = `${imageUrl}/${imageId}/full/843,/0/default.jpg`;
//   console.log('fullUrl', fullUrl);
// }

function imageCreator(): undefined {
  const objectArt = artData.map((item) => ({
    artistTitle: item.artistTitle,
    artworkType: item.artworkType,
    artTitle: item.artTitle,
    imageId: item.imageId,
    imageUrl: `https://www.artic.edu/iiif/2/${item.imageId}/full/843,/0/default.jpg`,
  }));
  console.log(objectArt);
}

imageCreator();
