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
    console.log('image data', imageData.pagination.next_url);

    artData = nextUrl.map((item: any) => ({
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
    console.log('art data', artData);
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

function imageCreator(): any {
  const objectArt = artData.map((item: any) => ({
    artistTitle: item.artistTitle,
    artworkType: item.artworkType,
    artTitle: item.artTitle,
    imageId: item.imageId,
    imageUrl: `https://www.artic.edu/iiif/2/${item.imageId}/full/843,/0/default.jpg`,
  }));
  console.log(objectArt);
}

imageCreator();
