import { createReducer } from '@reduxjs/toolkit';
import { setCity, setOffers, setActiveOffer } from '../action/action';
import { FullOffer } from '../../types/offer';
import { offers } from '../../mocks/offers';
import { LOCATIONS } from '../../const';

type State = {
  city: string;
  offers: FullOffer[];
  activeOfferId: string | null;
};

const initialCity = LOCATIONS.length > 0 ? LOCATIONS[0] : '';
const initialOffers = [...offers].filter((offer) => offer.city.name === initialCity);

const initialState: State = {
  city: initialCity,
  offers: initialOffers,
  activeOfferId: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
      state.offers = [...offers].filter((offer) => offer.city.name === action.payload);
    })
    .addCase(setOffers, (state) => {
      state.offers = [...offers].filter((offer) => offer.city.name === state.city);
    })
    .addCase(setActiveOffer, (state, action) => {
      state.activeOfferId = action.payload;
    });
});

export { reducer };
