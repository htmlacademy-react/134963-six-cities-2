import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FullOffer } from '../../../types/offer';
import { fetchOffers } from './offersThunks';
import { NameSpace } from '../../../const';

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
  name: NameSpace.Offers,
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

export const selectOffers = (state: { [NameSpace.Offers]: OffersState }): FullOffer[] => state[NameSpace.Offers].offers;
export const selectActiveOfferId = (state: { [NameSpace.Offers]: OffersState }): string | null => state[NameSpace.Offers].activeOfferId;
export const selectIsLoading = (state: { [NameSpace.Offers]: OffersState }): boolean => state[NameSpace.Offers].isLoading;
export const selectError = (state: { [NameSpace.Offers]: OffersState }): string | null => state[NameSpace.Offers].error;

export const {setActiveOffer} = offersSlice.actions;
export default offersSlice.reducer;
export {offersSlice};
