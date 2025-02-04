const $searchInput = document.querySelector('input[type="search"]');

if (!$searchInput) throw new Error('the query for search input failed');

$searchInput.addEventListener('search', (event: Event) => {
  const $eventTarget = event.target as HTMLInputElement;

  event.preventDefault();
  const resultFilter = artData.filter((item) =>
    item.artworkType.toLowerCase().includes($eventTarget.value.toLowerCase()),
  );
  console.log('result', resultFilter);
});
