'use client';

import { useRouter } from 'next/navigation';
import { startTransition, useEffect } from 'react';
import style from './error.module.css';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error(error.message);
  }, [error]);

  return (
    <div className={style.container}>
      <div className={style.error_message}>오류가 발생했습니다</div>
      <button
        onClick={() => {
          startTransition(() => {
            router.refresh();
            reset();
          });
        }}
      >
        Retry
      </button>
    </div>
  );
}
