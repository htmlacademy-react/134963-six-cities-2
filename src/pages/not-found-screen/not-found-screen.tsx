import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function NotFoundScreen(): JSX.Element {
  return (
    <div >
      <h1>404 NOT FOUND</h1>
      <p>Я искал высоко и низко. Не нашел</p>
      <h3>
        <Link to={AppRoute.Main}>Вернуться на главную страницу</Link>
      </h3>
    </div>

  );
}

export default NotFoundScreen;
