'use strict';
// /* exported data */
//  interface DataModel {
//       view: string;
//       results: myObjectImgs[],
//       nextEntryId: 1,
//       entryId: 1,
// }
//  console.log('DataModel')
// async function fetchArtObjects(): Promise<void> {
//   try {
//     const response = await fetch('https://api.artic.edu/api/v1/artworks/');
//     if (!response.ok) {
//       throw new Error(`Error: ${response.status} ${response.statusText}`);
//     }
//     const artData = await response.json()
//     const imageUrl = artData.config.iiif_url;
//     const appendD = '/full/843,/0/default.jpg';
//     for (let i = 0; i < artData.data.length; i++) {
//       const currentArtWork = artData.data[i];
//       const url = `${imageUrl}${currentArtWork.image_id}${appendD}`;
//       const $image = document.createElement('img');
//       $image.setAttribute('src', url);
//       console.log('$image',$image)
//   } catch (error) {
//     console.error('An error occurred:', error);
//   }
//   }
// }
// fetchArtObjects();
// const data = readData()
// function readData (): DataModel {
//   const storedDataJSON = localStorage.getItem('data')
//   if (storedDataJSON) {
//     return JSON.parse (storedDataJSON);
//   } else {
//     return {
//       view: 'search-results',
//       results: [],
//       nextEntryId: 1,
//       entryId: 1,
//     }
//   }
// }
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
