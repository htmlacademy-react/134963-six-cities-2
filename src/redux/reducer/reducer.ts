import { createReducer } from '@reduxjs/toolkit';
import { setCity, setActiveOffer, selectSort } from '../action/action';
import { FullOffer } from '../../types/offer';
import { offers } from '../../mocks/offers';
import { LOCATIONS, SORT_TYPES } from '../../const';

type State = {
  city: string;
  offers: FullOffer[];
  activeOfferId: string | null;
  selectedSort: string;
};

const initialState: State = {
  city: LOCATIONS[0],
  offers,
  activeOfferId: null,
  selectedSort: SORT_TYPES[0].name,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setActiveOffer, (state, action) => {
      state.activeOfferId = action.payload;
    }).addCase(selectSort, (state, action) => {
      state.selectedSort = action.payload;
    });
});

export { reducer };
