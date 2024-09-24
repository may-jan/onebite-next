export default async function fetchRandomMovies() {
  const url =
    'https://onebite-cinema-api-main-beige.vercel.app/movie/random';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
