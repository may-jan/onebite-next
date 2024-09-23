import SearchalbeLayout from '@/components/searchable-layout';
import { ReactNode, useEffect, useState } from 'react';
import MovieItem from '@/components/movie-item';
import style from './index.module.css';
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import fetchMovies from '@/lib/fetch-movies';
import { useRouter } from 'next/router';
import { MovieData } from '@/type';

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const q = context.query.q;
//   const movies = await fetchMovies(q as string);

//   return {
//     props: { movies },
//   };
// };

export default function Page() {
  // movies: InferGetServerSidePropsType<typeof getServerSideProps>

  const [movies, setMovies] = useState<MovieData[]>([]);
  const router = useRouter();
  const q = router.query.q;

  const fetchSearchResult = async () => {
    const data = await fetchMovies(q as string);
    setMovies(data);
  };

  useEffect(() => {
    if (q) {
      fetchSearchResult();
    }
  }, [q]);

  return (
    <div className={style.container}>
      {movies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchalbeLayout>{page}</SearchalbeLayout>;
};
