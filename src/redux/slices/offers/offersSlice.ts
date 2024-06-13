import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FullOffer } from '../../../types/offer';
import { fetchOffers } from './offersThunks';
import { NameSpace, RequestStatus } from '../../../const';
import { State } from '../../../types/state';

export interface OffersState {
  offers: FullOffer[];
  activeOfferId: string | null;
  status: RequestStatus;
}

const initialState: OffersState = {
  offers: [],
  activeOfferId: null,
  status: RequestStatus.Idle,
};

const offersSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setActiveOffer: (state, action: PayloadAction<string | null>) => {
      state.activeOfferId = action.payload;
    },
    updateOffers: (state, action: PayloadAction<string>) => {
      state.offers = state.offers.map((offer) => offer.id === action.payload ? { ...offer, isFavorite: !offer.isFavorite } : offer);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.status = RequestStatus.Success;
        state.offers = action.payload;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.status = RequestStatus.Failed;
      });
  }
});

export const selectOffers = (state: State) => state[NameSpace.Offers].offers;
export const selectActiveOfferId = (state: State) => state[NameSpace.Offers].activeOfferId;
export const selectOfferStatus = (state: State) => state[NameSpace.Offers].status;

export const {setActiveOffer} = offersSlice.actions;
export const { updateOffers } = offersSlice.actions;
export default offersSlice.reducer;
export {offersSlice};


export const selectOffersFetchStatus = createSelector(
  [selectOfferStatus],
  (status) => ({
    isLoading: status === RequestStatus.Loading,
    isSuccess: status === RequestStatus.Success,
    isError: status === RequestStatus.Failed,
    isIdle: status === RequestStatus.Idle,
  })
);
