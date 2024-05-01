import { createReducer } from '@reduxjs/toolkit';
import { setCity, setActiveOffer, selectSort } from '../action/action';
import { fetchOffers } from '../api-actions/api-actions';
import { FullOffer } from '../../types/offer';
import { LOCATIONS, SORT_TYPES } from '../../const';

type State = {
  city: string;
  offers: FullOffer[];
  activeOfferId: string | null;
  selectedSort: string;
  isLoading: boolean;
  error: string | null;
};

const initialState: State = {
  city: LOCATIONS[0],
  offers: [],
  activeOfferId: null,
  selectedSort: SORT_TYPES[0].name,
  isLoading: false,
  error: null
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setActiveOffer, (state, action) => {
      state.activeOfferId = action.payload;
    })
    .addCase(selectSort, (state, action) => {
      state.selectedSort = action.payload;
    })
    .addCase(fetchOffers.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.isLoading = false;

      if (Array.isArray(action.payload)) {
        state.offers = action.payload;
      } else {
        state.offers = [action.payload];
      }
    })
    .addCase(fetchOffers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || 'Что-то пошло не так';
    });
});

export { reducer };
