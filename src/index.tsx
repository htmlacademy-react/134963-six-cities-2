import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { checkAuth, fetchOffers } from './redux/api-actions/api-actions';
import { useAppSelector } from './hooks';
import { reviews } from './mock/reviews';
import { Toaster } from 'react-hot-toast';

store.dispatch(checkAuth());
store.dispatch(fetchOffers());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const AppWrapper = () => {
  const offers = useAppSelector((state) => state.offers);

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
