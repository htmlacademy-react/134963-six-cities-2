import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { fetchOffers } from './redux/slices/offers/offersThunks';
import { useAppSelector } from './hooks';
import { reviews } from './mock/reviews';
import { Toaster } from 'react-hot-toast';
import { selectOffers } from './redux/slices/offers/offersSlice';
import { checkAuth } from './redux/slices/user/userThunks';

store.dispatch(checkAuth());
store.dispatch(fetchOffers());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const AppWrapper = () => {
  const offers = useAppSelector(selectOffers);

  return (
    <Fragment>
      <App offers={offers} reviews={reviews} />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '10px 15px',
            backgroundColor: '#363636',
            color: '#fff',
          },
        }}
      />
    </Fragment>
  );
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  </React.StrictMode>
);
