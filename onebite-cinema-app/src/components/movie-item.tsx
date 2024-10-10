import { MovieData } from '@/types';
import Link from 'next/link';
import style from './movie-item.module.css';
import Image from 'next/image';

export default function MovieItem({
  id,
  title,
  posterImgUrl,
  movieType,
}: MovieData) {
  let size = {
    width: 0,
    height: 0,
  };

  if (movieType === 'AllMovies') {
    size.width = 156;
    size.height = 234;
  } else {
    size.width = 263;
    size.height = 395;
  }

  return (
    <Link href={`/movie/${id}`} className={style.container}>
      <Image
        width={size.width}
        height={size.height}
        src={posterImgUrl}
        alt={`영화 ${title}의 포스터 이미지`}
      />
    </Link>
  );
}
