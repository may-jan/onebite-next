import { ReviewData } from '@/types';
import style from './review-item.module.css';
import ReviewItemDeleteButtton from './review-item-delete-button';

export default function ReviewItem({
  id,
  content,
  author,
  createdAt,
  movieId,
}: ReviewData) {
  return (
    <div className={style.container}>
      <div className={style.top_container}>
        <div className={style.author}>{author}</div>
        <div className={style.date}>
          {new Date(createdAt).toLocaleDateString()}일 작성됨
        </div>
      </div>
      <div className={style.content}>{content}</div>
      <div className={style.delete_btn}>
        <ReviewItemDeleteButtton reviewId={id} movieId={movieId} />
      </div>
    </div>
  );
}
