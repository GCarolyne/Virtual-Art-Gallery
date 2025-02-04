'use strict';
// function filterArt() {
//   const resultSearch = artData.filter((item)=> item.artistTitle
// }
const $searchButton = document.querySelector('.search-button');
if (!$searchButton) throw new Error('the query for search button failed');
$searchButton.addEventListener('click', (event) => {
  const $eventTarget = event.target;
  const $artistInput = document.querySelector('#artist-input');
  if (!$artistInput) throw new Error('the query for artistInput failed');
  const searchArtistTitle = $artistInput.value.toLowerCase().trim();
  const resultArtistTitle = artData.filter(
    (item) => item.artistTitle.toLowerCase() === searchArtistTitle,
  );
  console.log(resultArtistTitle);
  console.log($eventTarget);
});
