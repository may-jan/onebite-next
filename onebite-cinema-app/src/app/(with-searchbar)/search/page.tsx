import { MovieData } from '@/types';
import style from './page.module.css';
import MovieItem from '@/components/movie-item';
import dealy from '@/util/delay';

export default async function Page({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const q = searchParams.q;

  await dealy(1500);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/search?q=${q}`,
    { cache: 'force-cache' } // 동일한 검색어는 동일한 정보를 가져오기 때문에
  );

  if (!response.ok) {
    return <div>오류가 발생했습니다 ...</div>;
  }

  const movies: MovieData[] = await response.json();

  return (
    <div className={style.container}>
      {movies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}
