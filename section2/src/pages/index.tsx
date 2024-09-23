import SearchalbeLayout from '@/components/searchable-layout';
import style from './index.module.css'; // CSS Module
import { ReactNode } from 'react';
import BookItem from '@/components/book-item';
import fetchBooks from '@/lib/fetch-books';
import { InferGetStaticPropsType } from 'next';
import fetchRandomBooks from '@/lib/fetch-random-books';

export const getStaticProps = async () => {
  // 컴포넌트보다 먼저 실행되어, 컴포넌트에 필요한 데이터를 불러오는 함수
  // 서버 환경에서만 실행되는 함수

  console.log('인덱스 페이지');

  const [allBooks, recoBooks] = await Promise.all([
    // Promise.all()
    // 인수로 전달한 배열안에 들어있는 모든 비동기함수들을 동시에 실행시켜주는 함수
    fetchBooks(),
    fetchRandomBooks(),
  ]);

  // return 값은 반드시 props라는 객체여야 한다
  return {
    props: {
      allBooks,
      recoBooks,
    },
  };
};

export default function Home({
  allBooks,
  recoBooks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {recoBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {allBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchalbeLayout>{page}</SearchalbeLayout>;
};
