// let resultFilter: ArtObject[] = [];

// let currentPage = 1;

// const itemsPerPage = 12;

// const $searchInput = document.querySelector('.search-button');

// if (!$searchInput) throw new Error('the query for search input failed');

// const $selectedInput = document.querySelector(
//   '#artist-input',
// ) as HTMLInputElement;
// if (!$selectedInput) throw new Error('the query for selected input failed');

// $searchInput.addEventListener('click', () => {
//   resultFilter = artData.filter((item) =>
//     item.artworkType.toLowerCase().includes($selectedInput.value.toLowerCase()),
//   );
//   viewSwap('search-result-page');
//   $ulParent.innerHTML = '';
//   currentPage = 1;

//   displayItems(resultFilter);
//   $selectedInput.value = '';
// });

// function viewSwap(viewName: string): void {
//   const $searchResultView = document.querySelector(
//     '[data-view="search-results"]',
//   );
//   if (!$searchResultView)
//     throw new Error('the query for search result view failed');

//   const $galleryView = document.querySelector('[data-view="view-intro"]');
//   if (!$galleryView) throw new Error('the query for gallery view failed');

//   const $favBar = document.querySelector('[data-view="fav-page"]');
//   if (!$favBar) throw new Error('the query for fav bar failed');

//   const $favBackground = document.querySelector('.nav-link');
//   if (!$favBackground) throw new Error('the query for favbackground failed');

//   if (viewName === 'fav-page') {
//     $searchResultView.classList.add('hidden');
//     $galleryView.classList.add('hidden');
//     $favBar.classList.remove('hidden');
//   } else if (viewName === 'view-intro') {
//     $searchResultView.classList.add('hidden');
//     $galleryView.classList.remove('hidden');
//     $favBar.classList.add('hidden');
//   } else if (viewName === 'search-result-page') {
//     $searchResultView.classList.remove('hidden');
//     $searchResultView.classList.add('body-favorite');
//     $searchResultView.classList.add('main-body-background');
//     $galleryView.classList.add('hidden');
//     $favBar.classList.add('hidden');
//   }
// }

// const $fav = document.querySelector('#fav-bar');
// if (!$fav) throw new Error('the query for fav bar failed');

// // $fav.addEventListener('click', () => {
// //   viewSwap('fav-page');
// //   const renderedFav = renderSearch();
// //   createFavoriteObjects(renderedFav);

// //   // I will render here my data array. by running on a loop my render function with the content of my object my favorite array wich is a property of the data object
// // });

// const $galleryView = document.querySelector('#gallery');
// if (!$galleryView) throw new Error('the query for main page failed');

// $galleryView.addEventListener('click', (event: Event) => {
//   const $eventTarget = event.target as HTMLAnchorElement;
//   if ($galleryView === $eventTarget) {
//     viewSwap('view-intro');
//   }
// });

// function renderSearch(objectArt: ArtObject): HTMLLIElement {
//   const $ulParent = document.querySelector('.searching-results');
//   if (!$ulParent) throw new Error('the query for ul parent failed');
//   const $liChild = document.createElement('li');
//   $liChild.setAttribute('class', 'result');
//   const $divRow = document.createElement('div');
//   $divRow.setAttribute('class', 'row');
//   const $divColumn = document.createElement('div');
//   $divColumn.setAttribute('class', 'column-one-third');
//   const $image = document.createElement('img');
//   $image.setAttribute('src', objectArt.imageUrl);
//   $image.setAttribute('alt', 'placeholder image');
//   $image.setAttribute('class', 'size-image');

//   const $h2 = document.createElement('h2');
//   $h2.setAttribute('class', 'artist-title');
//   $h2.textContent = objectArt.artistTitle;
//   const $h3 = document.createElement('h3');
//   $h3.setAttribute('class', 'artwork-type');
//   $h3.textContent = objectArt.artworkType;
//   const $h4 = document.createElement('h4');
//   $h4.setAttribute('class', 'artwork-title');
//   $h4.textContent = objectArt.artTitle;

//   const $favoriteButton = document.createElement('button');
//   $favoriteButton.setAttribute('class', 'favorite-btn');

//   $favoriteButton.setAttribute('class', 'fa-solid fa-star');
//   $favoriteButton.setAttribute('data-image-id', `${objectArt.imageId}`);
//   $favoriteButton.addEventListener('click', (event: Event) => {
//     const target = event.target as HTMLElement;
//     const searchId = target.dataset.imageId;
//     const foundArt = artData.find((art) => art.imageId === searchId);

//     if (foundArt) {
//       data.favorite.unshift(foundArt);

//       createFavoriteObjects();

//       writeData();
//       viewSwap('fav-page');
//     }
//   });

//   $ulParent.appendChild($liChild);
//   $liChild.appendChild($divRow);
//   $divRow.appendChild($divColumn);
//   $divColumn.appendChild($image);
//   $divColumn.appendChild($h2);
//   $divColumn.appendChild($h3);
//   $divColumn.appendChild($h4);
//   $divRow.appendChild($divColumn);
//   $liChild.appendChild($divRow);
//   $divColumn.appendChild($favoriteButton);

//   return $liChild;
// }

// document.addEventListener('DOMContentLoaded', async () => {
//   await fetchArtObjects();
//   currentPage = 1;
//   displayItems(artData);
// });

// let dataFav: ArtObject[] = [];

// // function createFavoriteObjects(): ArtObject[] {
// //   dataFav = data.favorite;
// //   dataFav.map((item: any): ArtObject => {
// //     return {
// //       artistTitle: item.artistTitle,
// //       artworkType: item.artworkType,
// //       artTitle: item.artTitle,
// //       imageId: item.imageId,
// //       imageUrl: `https://www.artic.edu/iiif/2/${item.imageId}/full/843,/0/default.jpg`,
// //     };
// //   });
// // }

// // function renderFavorites(favoriteObjects: ArtObject[]) {
// //   const $favContainertoAppend = document.querySelector('.body-favorite');
// //   if (!$favContainertoAppend)
// //     throw new Error('the query failed for fav container');

// //   dataFav.forEach((item: any): ArtObject => {
// //     const favElement = document.createElement('div');
// //     favElement.classList.add('result');

// //     const imgElement = document.createElement('img');
// //     imgElement.src = item.imageUrl;
// //     imgElement.alt = item.artTitle;
// //     imgElement.className = 'size-image';

// //     const infoDiv = document.createElement('div');
// //     infoDiv.className = 'artwork-info';

// //     const artistTitle = document.createElement('h3');
// //     artistTitle.className = 'artist-title';
// //     artistTitle.textContent = item.artistTitle;

// //     const artworkType =document.
// //   });
// // }

// const $ulParent = document.querySelector('.searching-results') as HTMLElement;
// if (!$ulParent) throw new Error('the query for ul parent failed');

// function displayItems(items: ArtObject[]): void {
//   $ulParent.innerHTML = '';
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const currentItems = items.slice(startIndex, endIndex);

//   currentItems.forEach((item) => {
//     const listItem = renderSearch(item);
//     $ulParent.appendChild(listItem);
//   });
//   paginationControl(resultFilter);
// }

// const $left = document.querySelector('.go-left') as HTMLButtonElement;
// if (!$left) throw new Error('the query for left arrow failed');

// const $right = document.querySelector('.go-right') as HTMLButtonElement;
// if (!$right) throw new Error('the query for right arrow failed');

// function paginationControl(items: ArtObject[]): void {
//   const $paginationContainer = document.createElement('div');
//   $paginationContainer.setAttribute('class', 'pagination-control');
//   $ulParent.parentElement?.appendChild($paginationContainer);
//   $paginationContainer.innerHTML = '';
//   const totalPages = Math.ceil(items.length / itemsPerPage);

//   if (currentPage < totalPages) {
//     $right.onclick = (): void => {
//       currentPage++;
//       displayItems(items);
//       if (totalPages === currentPage) {
//         $right.classList.add('hidden');
//       }
//       $left.classList.remove('hidden');
//     };
//   }
//   if (currentPage > 1) {
//     $left.onclick = (): void => {
//       currentPage--;
//       displayItems(items);
//       if (currentPage === 1) {
//         $left.classList.add('hidden');
//       }
//       $right.classList.remove('hidden');
//     };
//   }
// }
