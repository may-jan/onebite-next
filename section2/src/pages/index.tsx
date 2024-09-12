import SearchalbeLayout from '@/components/searchable-layout';
import style from './index.module.css'; // CSS Module
import { ReactNode } from 'react';

export default function Home() {
  return (
    <>
      <h1 className={style.h1}>인덱스</h1>
      <h2 className={style.h2}>H2</h2>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchalbeLayout>{page}</SearchalbeLayout>;
};
