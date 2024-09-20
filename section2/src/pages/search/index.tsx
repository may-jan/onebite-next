import SearchalbeLayout from '@/components/searchable-layout';
import { ReactNode } from 'react';
import BookItem from '@/components/book-item';
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import fetchBooks from '@/lib/fetch-books';

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // context : 현재 브라우저로 부터 받은 모든 정보가 포함
  const q = context.query.q;
  const books = await fetchBooks(q as string);

  return {
    props: { books },
  };
};

export default function Page({
  books,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchalbeLayout>{page}</SearchalbeLayout>;
};
