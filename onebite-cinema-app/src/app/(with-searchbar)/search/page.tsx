import { MovieData } from '@/types';
import style from './page.module.css';
import MovieItem from '@/components/movie-item';
import dealy from '@/util/delay';
import { Suspense } from 'react';
import MovieListSkeleton from '@/components/skeleton/skeleton/movie-list-skeleton';

async function SearchResult({ q }: { q: string }) {
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
    <div>
      {movies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}

export default async function Page({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  return (
    <div className={style.container}>
      <Suspense
        key={searchParams.q || ''}
        fallback={<MovieListSkeleton count={6} />}
      >
        <SearchResult q={searchParams.q || ''} />
      </Suspense>
    </div>
  );
}
