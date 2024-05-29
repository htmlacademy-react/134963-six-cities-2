import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '../../../const';
import { FullOffer } from '../../../types/offer';
import { Comment } from '../../../types/comments';
import { fetchOfferByIdAction, fetchNearByOffersAction } from './offerThunks';

export interface OfferState {
  nearByOffers: FullOffer[];
  offer: FullOffer | null;
  comments: Comment[];
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
  reducers: {},
  extraReducers: (builder) => {
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
      });
  },
});

export const selectOffer = (state: { offer: OfferState }): FullOffer | null => state.offer.offer;
export const selectNearByOffers = (state: { offer: OfferState }): FullOffer[] => state.offer.nearByOffers;
export const selectComments = (state: { offer: OfferState }): Comment[] => state.offer.comments;
export const selectOfferStatus = (state: { offer: OfferState }): RequestStatus => state.offer.status;
export default offerSlice.reducer;
export {offerSlice};
