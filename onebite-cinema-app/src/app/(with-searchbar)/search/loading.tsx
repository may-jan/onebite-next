import style from './page.module.css';

export default function Loading() {
  return (
    <div className={style.loading}>
      <img src='https://upload.wikimedia.org/wikipedia/commons/a/ad/YouTube_loading_symbol_3_%28transparent%29.gif' />
    </div>
  );
}
