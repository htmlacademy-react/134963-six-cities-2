import { createReducer } from '@reduxjs/toolkit';
import { setCity, setOffers } from '../action/action';
import { FullOffer } from '../../types/offer';
import { offers } from '../../mocks/offers';

type State = {
  city: string;
  offers: FullOffer[];
};

const AllCities = Array.from(new Set(offers.map((offer)=> offer.city.name)));

const initialState: State = {
  city: AllCities[0],
  offers: [...offers].filter((offer) => offer.city.name === AllCities[0]),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state) => {
      state.offers = [...offers].filter(
        (offer) => offer.city.name === state.city
      );
    });
});

export {reducer};
