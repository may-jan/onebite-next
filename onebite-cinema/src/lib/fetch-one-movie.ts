import { MovieData } from '@/type';

export default async function fetchOneMovie(
  id: number
): Promise<MovieData | null> {
  const url = `https://onebite-cinema-api-main-beige.vercel.app/movie/${id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}
