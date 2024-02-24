import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Helmet } from 'react-helmet-async';

function NotFoundScreen(): JSX.Element {
  return (
    <div >
      <Helmet>
        <title>{'6 cities - Not Found'}</title>
      </Helmet>
      <h1>404 NOT FOUND</h1>
      <p>Я искал высоко и низко. Не нашел</p>
      <h3>
        <Link to={AppRoute.Main}>Вернуться на главную страницу</Link>
      </h3>
    </div>

  );
}

export default NotFoundScreen;
