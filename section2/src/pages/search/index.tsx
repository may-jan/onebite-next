import SearchalbeLayout from '@/components/searchable-layout';
import { ReactNode, useEffect, useState } from 'react';
import BookItem from '@/components/book-item';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import fetchBooks from '@/lib/fetch-books';
import { useRouter } from 'next/router';
import { BookData } from '@/types';
import Head from 'next/head';

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   // context : 현재 브라우저로 부터 받은 모든 정보가 포함
//   const q = context.query.q;
//   const books = await fetchBooks(q as string);

//   return {
//     props: { books },
//   };
// };

export default function Page() {
  // {books}: InferGetStaticPropsType<typeof getStaticProps>

  const [books, setBooks] = useState<BookData[]>([]);
  const router = useRouter();
  const q = router.query.q;

  const fetchSearchResult = async () => {
    const data = await fetchBooks(q as string);
    setBooks(data);
  };

  useEffect(() => {
    if (q) {
      fetchSearchResult();
    }
  }, [q]);

  return (
    <div>
      <Head>
        <title>한입북스 - 검색결과</title>
        <meta property='og:image' content='/thumbnail.png' />
        <meta property='og:title' content='한입북스 - 검색결과' />
        <meta
          property='og:description'
          content='한입 북스에 등록된 도서들을 만나보세요'
        />
      </Head>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchalbeLayout>{page}</SearchalbeLayout>;
};
