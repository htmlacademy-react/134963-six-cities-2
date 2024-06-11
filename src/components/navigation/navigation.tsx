import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { logoutAction } from '../../redux/slices/user/userThunks';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectUserData } from '../../redux/slices/user/userSlice';
import { selectAuthorizationStatus } from '../../redux/slices/user/userSlice';
import { selectFavoriteOffers } from '../../redux/slices/favorites/favoriteSlice';
import { fetchOffers } from '../../redux/slices/offers/offersThunks';
import { fetchFavoriteAction } from '../../redux/slices/favorites/favoriteThunks';

function Navigation(): JSX.Element {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(selectUserData);
  const favoriteCount = useAppSelector(selectFavoriteOffers);
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  const handleLogout = () => {
    dispatch(logoutAction())
      .then(() => {
        dispatch(fetchFavoriteAction());
        dispatch(fetchOffers());
      });
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {authorizationStatus === 'AUTH' && userData ? (
          <>
            <li className="header__nav-item user">
              <Link
                className="header__nav-link header__nav-link--profile"
                to={AppRoute.Favorites}
              >
                <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                <span className="header__user-name user__name">
                  {userData?.email}
                </span>
                <span className="header__favorite-count">{favoriteCount.length}</span>
              </Link>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="#" onClick={handleLogout}>
                <span className="header__signout">Sign out</span>
              </a>
            </li>
          </>
        ) : (
          <li className="header__nav-item user">
            <Link
              className="header__nav-link header__nav-link--profile"
              to={AppRoute.Login}
            >
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
