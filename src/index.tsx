import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { fetchOffers } from './redux/api-actions/api-actions';
import { useAppSelector } from './hooks';
import { reviews } from './mock/reviews';

store.dispatch(fetchOffers());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const AppWrapper = () => {
  const offers = useAppSelector((state) => state.offers);

  return <App offers={offers} reviews={reviews} />;
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  </React.StrictMode>
);
