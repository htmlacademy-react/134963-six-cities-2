import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../../const';
import { FullOffer } from '../../../types/offer';
import { Comment } from '../../../types/comments';
import { fetchOfferByIdAction, fetchNearByOffersAction } from './offerThunks';
import { State } from '../../../types/state';

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
  name: NameSpace.Offer,
  initialState,
  reducers: {
    clear(state) {
      state.offer = null;
      state.nearByOffers = [];
    }
  },
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

export const selectOffer = (state: State) => state[NameSpace.Offer].offer;
export const selectNearByOffers = (state: State)=> state[NameSpace.Offer].nearByOffers;
export const selectComments = (state: State) => state[NameSpace.Offer].comments;
export const selectOfferStatus = (state: State) => state[NameSpace.Offer].status;
export {offerSlice};
