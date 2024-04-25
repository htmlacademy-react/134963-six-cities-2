import { createReducer } from '@reduxjs/toolkit';
import { setCity, setActiveOffer } from '../action/action';
import { FullOffer } from '../../types/offer';
import { offers } from '../../mocks/offers';
import { LOCATIONS } from '../../const';

type State = {
  city: string;
  offers: FullOffer[];
  activeOfferId: string | null;
};

const initialState: State = {
  city: LOCATIONS[0],
  offers,
  activeOfferId: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setActiveOffer, (state, action) => {
      state.activeOfferId = action.payload;
    });
});

export { reducer };
