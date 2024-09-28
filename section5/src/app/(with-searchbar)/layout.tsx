import { ReactNode, Suspense } from 'react';
import Searchbar from '../../components/searchbar';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* 클라이언트 라우트 캐시 */}
      {/* <div>{new Date().toLocaleString()}</div> */}
      <Suspense fallback={<div>Loading ...</div>}>
        <Searchbar />
      </Suspense>
      {children}
    </div>
  );
}
