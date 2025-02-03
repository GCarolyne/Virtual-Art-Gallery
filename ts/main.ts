async function fetchArtObjects(): Promise<void> {
  try {
    const response = await fetch(
      'https://api.artic.edu/api/v1/artworks?limit=100',
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}
fetchArtObjects();
