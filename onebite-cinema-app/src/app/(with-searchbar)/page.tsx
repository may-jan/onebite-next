import style from './page.module.css';
import MovieItem from '@/components/movie-item';
import MovieListSkeleton from '@/components/skeleton/skeleton/movie-list-skeleton';
import { MovieData } from '@/types';
import dealy from '@/util/delay';
import { Suspense } from 'react';

async function AllMovies() {
  await dealy(1500);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`,
    { cache: 'force-cache' } // 새로운 영화를 추가 or 삭제하지 않기 때문에
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다 ...</div>;
  }
  const movies: MovieData[] = await response.json();
  return movies.map((movie) => <MovieItem key={movie.id} {...movie} />);
}

async function RecoMovies() {
  await dealy(3000);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/random`,
    { next: { revalidate: 3 } } // 추천 영화를 3초마다 업데이트하기 위해
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다 ...</div>;
  }
  const movies: MovieData[] = await response.json();
  return movies.map((movie) => <MovieItem key={movie.id} {...movie} />);
}

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 가장 추천하는 영화</h3>
        <div className={style.recommend_movie}>
          <Suspense fallback={<MovieListSkeleton count={3} />}>
            <RecoMovies />
          </Suspense>
        </div>
      </section>
      <section>
        <h3>등록된 모든 영화</h3>
        <div className={style.all_movie}>
          <Suspense fallback={<MovieListSkeleton count={20} />}>
            <AllMovies />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
