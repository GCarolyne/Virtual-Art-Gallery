'use strict';
// interface myObjectImgs {
//   image: string;
//   artistName: string;
//   artworkTitle: string;
// }
// const $resultsSearch = document.querySelector('#anchor');
// if (!$resultsSearch) throw new Error('the $resultsSearch query failed.');
// const $mainPage = document.querySelector('form');
// if (!$mainPage) throw new Error('the $mainPage query failed.');
// function handleInput(event: Event): void {
//   if (!$resultsSearch) throw new Error(' the $resultsSearch query failed.');
//   const $eventTarget = event.target as HTMLInputElement;
//   const eventTargetValue = $eventTarget.value;
//   $resultsSearch.setAttribute('src', eventTargetValue);
// }
// $resultsSearch.addEventListener('input', handleInput);
// function viewSwap(viewName: string): void {
//   if (!$resultsSearch) throw new Error('the $resultsSearch query failed.');
//   if (!$mainPage) throw new Error('the $mainPage query failed.');
//   if (viewName === 'search-page') {
//     $resultsSearch.classList.add('hidden');
//     $mainPage.classList.remove('hidden');
//   } else if (viewName === 'search-results') {
//     $resultsSearch.classList.remove('hidden');
//     $mainPage.classList.add('hidden');
//   }
// }
// viewSwap();
// function submitForm(event: Event): any {
//   if (!$mainPage) throw new Error('the $mainPage query failed.');
//   const $searchInput = $mainPage.elements;
//   console.log('$searchInput', $searchInput);
//   event.preventDefault();
//   viewSwap('search-results');
// }
// $resultsSearch.addEventListener('submit', submitForm);
