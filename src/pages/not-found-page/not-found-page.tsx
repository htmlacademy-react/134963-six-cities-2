import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import styles from './not-found-page.module.css';
import { Helmet } from 'react-helmet-async';

function NotFoundPage(): JSX.Element {
  return (
    <div className= {styles.notFoundScreen}>
      <Helmet> {'6 cities - Not Found'}</Helmet>
      <h1 className={styles.title}>404 NOT FOUND</h1>
      <p className={styles.text}>Я искал высоко и низко. Не нашел</p>
      <h3 >
        <Link className={styles.link} to={AppRoute.Main}>Вернуться на главную страницу</Link>
      </h3>
    </div>

  );
}

export default NotFoundPage;
