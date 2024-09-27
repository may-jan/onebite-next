import style from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={style.container}>
      <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Sad_Emoji_-_FREE_%2850215487012%29.png' />
      <div className={style.notFound}>404 | Page Not Found</div>
    </div>
  );
}
