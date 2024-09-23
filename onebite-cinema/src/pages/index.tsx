import SearchalbeLayout from '@/components/searchable-layout';
import { ReactNode } from 'react';
import MovieItem from '@/components/movie-item';
import style from './index.module.css';
import fetchMovies from '@/lib/fetch-movies';
import { InferGetStaticPropsType } from 'next';
import fetchRandomMovies from '@/lib/fetch-random-movies';
import { MovieData } from '@/type';

export const getStaticProps = async () => {
  const [allMovies, recoMovies] = await Promise.all([
    fetchMovies(),
    fetchRandomMovies(),
  ]);
  return {
    props: { allMovies, recoMovies },
  };
};

export default function Home({
  allMovies,
  recoMovies,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <div className={style.container}>
        <section>
          <h3>지금 가장 추천하는 영화</h3>
          <div className={style.recommend_movie}>
            {recoMovies.slice(0, 3).map((movie: MovieData) => (
              <MovieItem key={movie.id} {...movie} />
            ))}
          </div>
        </section>
        <section>
          <h3>등록된 모든 영화</h3>
          <div className={style.all_movie}>
            {allMovies.map((movie) => (
              <MovieItem key={movie.id} {...movie} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchalbeLayout>{page}</SearchalbeLayout>;
};
