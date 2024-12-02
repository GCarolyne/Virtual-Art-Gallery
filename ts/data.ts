// /* exported data */
//  interface DataModel {
//       view: string;
//       results: myObjectImgs[],
//       nextEntryId: number,
//       entryId: number,
// }
//  console.log('DataModel')

// async function fetchArtObjects(): Promise<void> {
//   try {
//     const response = await fetch('https://api.artic.edu/api/v1/artworks?page=2&limit=100');

//     if (!response.ok) {
//       throw new Error(`Error: ${response.status} ${response.statusText}`);
//     }
//     const artData = await response.json()
//     console.log(artData)
//     const imageUrl = artData.config.iiif_url;
//     const appendD = '/full/843,/0/default.jpg';
//     for (let i = 0; i < artData.data.length; i++) {
//       const currentArtWork = artData.data[i];
//       const url = `${imageUrl}${currentArtWork.image_id}${appendD}`;

//       // let $artistName = document.createElement('h3')
//       // $artistName.textContent = currentArtWork.artist_title

//       // let $artworkTitle = document.createElement('p')
//       // $artworkTitle.textContent = currentArtWork.title

//       const $image = document.createElement('img');
//       $image.setAttribute('src', url);
//       document.body.appendChild($image)

//       // const $myChild = document.createElement('li')
//       // $myChild.className = 'row'

//       // const $myParentDiv = document.createElement('div')
//       // $myParentDiv.className = 'column-full'

//       // const $ulParent = document.createElement('ul')
//       // $ulParent.className = 'results'

//       // $myChild.appendChild($image)
//       // $myChild.appendChild($artworkTitle)
//       // $myChild.appendChild($artistName)
//       // $ulParent.appendChild($myChild)
//       // $myParentDiv.appendChild($ulParent)
//       // console.log('$myParentDiv', $myParentDiv)

//       // document.body.appendChild($myParentDiv)

//       // const artObject: myObjectImgs = {
//       //     image: `$image`,
//       //     artistName: `$artistName`,
//       //     artworkTitle: `$artworkTitle`
//       // }

//       // return artObject

//   } catch (error) {
//     console.error('An error occurred:', error);
//   }
//   }
// }

// fetchArtObjects();

// async function fetchPoetObjects(): Promise<void> {
//   try {
//     const response = await fetch('https://poetrydb.org/title/Sonnet');
//     if (!response.ok) {
//       throw new Error(`Error: ${response.status} ${response.statusText}`);
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('An error occurred:', error);
//   }
// }

// fetchPoetObjects();
