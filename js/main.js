'use strict';
// // place event target on the search button
// interface FormElement extends HTMLFormControlsCollection {
//   artistTitle: HTMLImageElement;
//   artworkTypeTitle: HTMLInputElement;
//   imageId: HTMLInputElement;
// }
// interface myObjectImgs {
//   artistTitle: string;
//   artworkTypeTitle: string;
//   imageId: string;
// }
// // query for all the dom objects in html to create them here in TS
// // working with search bar input data
// const $resultsSearch = document.querySelector('search-results');
// if (!$resultsSearch) throw new Error('the $resultsSearch query failed.');
// const $mainPage = document.querySelector('#search-page');
// if (!$mainPage) throw new Error('the $mainPage query failed.');
// const $searchForm = document.querySelector('form');
// if (!$searchForm) throw new Error('the $searchForm query failed.');
// const $imageObject = document.querySelector('img');
// if (!$imageObject) throw new Error('the $imageObject query failed.');
// const $userInput = document.querySelector('user-input');
// if (!$userInput) throw new Error(' the $userInput query failed.');
// console.log('$imageObejct', $imageObject);
// function handleInput(event: Event): void {
//   if (!$userInput) throw new Error(' the $userInput query failed.');
//   const $eventTarget = event.target as HTMLInputElement;
//   const eventTargetValue = $eventTarget.value;
//   $userInput.setAttribute('src', eventTargetValue);
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
// function submitForm(event: Event): undefined {
//   if (!$searchForm) throw new Error('the $searchForm query failed.');
//   const $searchInput = $searchForm.elements as FormElement;
//   console.log('$searchInput', $searchInput);
//   // event.preventDefault();
// }
// submitForm();
