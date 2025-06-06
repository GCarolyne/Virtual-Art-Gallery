/* exported data */
interface ArtObject {
  artistTitle: string;
  artworkType: string;
  artTitle: string;
  imageId?: string;
  imageUrl: string;
  entryId?: number;
}

interface Data {
  view: string;
  favorite: ArtObject[];
  nextEntryId: number;
}
const data = readData();
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

    artData = nextUrl.map(
      (item: any): ArtObject => ({
        artistTitle: item.artist_title,
        artworkType: item.artwork_type_title,
        artTitle: item.title,
        imageId: item.image_id,
        imageUrl: `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`,
      }),
    );

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
function writeData(): undefined {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('favorite', dataJSON);
}
writeData();

function readData(): Data {
  const storedData = localStorage.getItem('favorite');
  if (storedData) {
    return JSON.parse(storedData);
  }
  return {
    view: 'fav-page',
    favorite: [],
    nextEntryId: 1,
  };
}
