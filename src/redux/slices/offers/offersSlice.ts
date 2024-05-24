import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FullOffer } from '../../../types/offer';
import { fetchOffers } from './offersThunks';

export interface OffersState {
  offers: FullOffer[];
  activeOfferId: string | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: OffersState = {
  offers: [],
  activeOfferId: null,
  isLoading: false,
  error: null
};

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    setActiveOffer: (state, action: PayloadAction<string | null>) => {
      state.activeOfferId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.offers = action.payload;
      })
      .addCase(fetchOffers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? 'An error occurred';
      });
  }
});

export const selectOffers = (state: { offers: OffersState }) => state.offers.offers;
export const selectActiveOfferId = (state: { offers: OffersState }) => state.offers.activeOfferId;
export const selectIsLoading = (state: { offers: OffersState }) => state.offers.isLoading;
export const selectError = (state: { offers: OffersState }) => state.offers.error;

export const {setActiveOffer} = offersSlice.actions;
export default offersSlice.reducer;
export {offersSlice};
