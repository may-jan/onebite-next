import { MovieData } from '@/types';
import style from './page.module.css';
import MovieItem from '@/components/movie-item';
import { Suspense } from 'react';
import MovieListSkeleton from '@/components/skeleton/skeleton/movie-list-skeleton';
import { Metadata } from 'next';

async function SearchResult({ q }: { q: string }) {
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

type Props = { searchParams: { q?: string } };

export function generateMetadata({ searchParams }: Props): Metadata {
  return {
    title: `${searchParams.q} : 한입 시네마 검색`,
    description: `${searchParams.q} 검색 결과입니다`,
    openGraph: {
      title: `${searchParams.q} : 한입 시네마 검색`,
      description: `${searchParams.q} 검색 결과입니다`,
      images: ['/thmubnail.png'],
    },
  };
}

export default async function Page({ searchParams }: Props) {
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
