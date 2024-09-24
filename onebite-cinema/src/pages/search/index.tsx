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
import Head from 'next/head';

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
    <>
      <Head>
        <title>한입 시네마 - 검색결과</title>
        <meta property='og:image' content='/thumbnail.png' />
        <meta property='og:title' content='한입 시네마 - 검색결과' />
        <meta
          property='og:description'
          content='한입 시네마에 등록된 영화들을 만나보세요 '
        />
      </Head>
      <div className={style.container}>
        {movies.map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchalbeLayout>{page}</SearchalbeLayout>;
};
