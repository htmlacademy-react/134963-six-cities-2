import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FullOffer } from '../../../types/offer';
import { fetchOffers } from './offersThunks';

export interface OfferState {
  offers: FullOffer[];
  activeOfferId: string | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: OfferState = {
  offers: [],
  activeOfferId: null,
  isLoading: false,
  error: null
};

const offerSlice = createSlice({
  name: 'offer',
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

export const selectOffers = (state: { offer: OfferState }) => state.offer.offers;
export const selectActiveOfferId = (state: { offer: OfferState }) => state.offer.activeOfferId;
export const selectIsLoading = (state: { offer: OfferState }) => state.offer.isLoading;
export const selectError = (state: { offer: OfferState }) => state.offer.error;

export const {setActiveOffer} = offerSlice.actions;
export default offerSlice.reducer;
export {offerSlice};
