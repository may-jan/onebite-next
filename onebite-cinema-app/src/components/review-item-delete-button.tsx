'use client';

import deleteReviewAction from '@/actions/delete-review.action';
import { useActionState, useEffect, useRef } from 'react';

export default function ReviewItemDeleteButtton({
  reviewId,
  movieId,
}: {
  reviewId: number;
  movieId: number;
}) {
  const formRef = useRef<HTMLFormElement>(null);

  const [state, formAction, isPending] = useActionState(
    deleteReviewAction,
    null
  );

  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);

  const clickDelBtn = () => {
    const del = confirm(`리뷰를 삭제하시겠습니까?`);
    if (del) {
      formRef.current?.requestSubmit();
      alert('리뷰를 삭제합니다');
    } else {
      alert('리뷰 삭제가 취소되었습니다');
    }
  };

  return (
    <form ref={formRef} action={formAction}>
      <input name='reviewId' value={reviewId} hidden />
      <input name='movieId' value={movieId} hidden />
      {isPending ? (
        <div>...</div>
      ) : (
        <div onClick={clickDelBtn}>🗑️ 리뷰 삭제하기</div>
      )}
    </form>
  );
}
