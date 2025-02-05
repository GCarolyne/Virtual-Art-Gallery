const $searchInput = document.querySelector('.search-button');

if (!$searchInput) throw new Error('the query for search input failed');

const $selectedInput = document.querySelector(
  '#artist-input',
) as HTMLInputElement;
if (!$selectedInput) throw new Error('the query for selected input failed');

$searchInput.addEventListener('click', () => {
  const resultFilter = artData.filter((item) =>
    item.artworkType.toLowerCase().includes($selectedInput.value.toLowerCase()),
  );
  viewSwap('search-result-page');
  $ulParent.innerHTML = '';
  for (let i = 0; i < resultFilter.length; i++) {
    renderSearch(resultFilter[i]);
  }
  console.log('result', resultFilter);
});

function viewSwap(viewName: string): void {
  const $searchResultView = document.querySelector(
    '[data-view="search-results"]',
  );
  if (!$searchResultView)
    throw new Error('the query for search result view failed');

  const $galleryView = document.querySelector('[data-view="view-intro"]');
  if (!$galleryView) throw new Error('the query for gallery view failed');

  const $favBar = document.querySelector('[data-view="fav-page"]');
  if (!$favBar) throw new Error('the query for fav bar failed');

  if (viewName === 'fav-page') {
    $searchResultView.classList.add('hidden');
    $galleryView.classList.add('hidden');
    $favBar.classList.remove('hidden');
  } else if (viewName === 'view-intro') {
    $searchResultView.classList.add('hidden');
    $galleryView.classList.remove('hidden');
    $favBar.classList.add('hidden');
  } else if (viewName === 'search-result-page') {
    $searchResultView.classList.remove('hidden');
    $searchResultView.classList.add('main-body-background');
    $galleryView.classList.add('hidden');
    $favBar.classList.add('hidden');
  }
}

const $fav = document.querySelector('#fav-bar');
if (!$fav) throw new Error('the query for fav bar failed');

$fav.addEventListener('click', (event: Event) => {
  const $eventTarget = event.target as HTMLAnchorElement;
  console.log('event', $eventTarget);
  if ($fav.contains($eventTarget)) {
    viewSwap('fav-page');
  }
});

const $galleryView = document.querySelector('#gallery');
if (!$galleryView) throw new Error('the query for main page failed');

$galleryView.addEventListener('click', (event: Event) => {
  const $eventTarget = event.target as HTMLAnchorElement;
  if ($galleryView === $eventTarget) {
    viewSwap('view-intro');
  }
});

function renderSearch(objectArt: ArtObject): HTMLLIElement {
  console.log('object art', objectArt);
  const $ulParent = document.querySelector('#searching-results');
  if (!$ulParent) throw new Error('the query for ul parent failed');
  const $liChild = document.createElement('li');
  $liChild.setAttribute('class', 'result');
  const $divRow = document.createElement('div');
  $divRow.setAttribute('class', 'row');
  const $divColumn = document.createElement('div');
  $divColumn.setAttribute('class', 'column-one-third');
  const $image = document.createElement('img');
  $image.setAttribute('src', objectArt.imageUrl);
  $image.setAttribute('alt', 'placeholder image');
  $image.setAttribute('class', 'size-image');

  const $h2 = document.createElement('h2');
  $h2.setAttribute('class', 'artist-title');
  $h2.textContent = objectArt.artistTitle;
  const $h3 = document.createElement('h3');
  $h3.setAttribute('class', 'artwork-type');
  $h3.textContent = objectArt.artworkType;
  const $h4 = document.createElement('h4');
  $h4.setAttribute('class', 'artwork-type');
  $h4.textContent = objectArt.artTitle;

  const $favoriteButton = document.createElement('button');
  $favoriteButton.setAttribute('class', 'favorite-btn');
  $favoriteButton.textContent = 'Add to Favorites';

  $ulParent.appendChild($liChild);
  $liChild.appendChild($divRow);
  $divRow.appendChild($divColumn);
  $divColumn.appendChild($image);
  $divColumn.appendChild($h2);
  $divColumn.appendChild($h3);
  $divColumn.appendChild($h4);
  $divRow.appendChild($divColumn);
  $liChild.appendChild($divRow);
  $divColumn.appendChild($favoriteButton);

  return $liChild;
}

document.addEventListener('DOMContentLoaded', async () => {
  await fetchArtObjects();
  const itemsPerPage = 12;
  const startIndex = 0;
  const endIndex = Math.min(startIndex + itemsPerPage, artData.length);
  for (let i = startIndex; i < endIndex; i++) {
    const art = artData[i];
    const listItem = renderSearch(art);
    $ulParent.appendChild(listItem);
  }
  imageCreator();
});

const $ulParent = document.querySelector('#searching-results') as HTMLElement;
if (!$ulParent) throw new Error('the query for ul parent failed');
