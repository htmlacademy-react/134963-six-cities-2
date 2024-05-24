import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '../../../const';
import { FullOffer } from '../../../types/offer';
import { Reviews } from '../../../types/reviews';
import { fetchOfferByIdAction, fetchNearByOffersAction } from './offerThunks';

export interface OfferState {
  nearByOffers: FullOffer[];
  offer: FullOffer | null;
  comments: Reviews;
  status: RequestStatus;
}

const initialState: OfferState = {
  nearByOffers: [],
  offer: null,
  comments: [],
  status: RequestStatus.Idle,
};

const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {
    clear(state) {
      state.offer = null;
      state.nearByOffers = [];
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchOfferByIdAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(fetchOfferByIdAction.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(fetchOfferByIdAction.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchNearByOffersAction.fulfilled, (state, action) => {
        state.nearByOffers = action.payload;
      }),
});

export const { clear } = offerSlice.actions;
export default offerSlice.reducer;


