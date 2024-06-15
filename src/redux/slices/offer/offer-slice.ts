import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../../const';
import { FullOffer } from '../../../types/offer';
import { Comment } from '../../../types/comments';
import { fetchOfferByIdAction, fetchNearByOffersAction } from './offer-thunks';
import { State } from '../../../types/state';

export interface OfferState {
  nearByOffers: FullOffer[];
  offer: FullOffer | null;
  comments: Comment[];
  status: RequestStatus;
  nearByStatus: RequestStatus;
}

const initialState: OfferState = {
  nearByOffers: [],
  offer: null,
  comments: [],
  status: RequestStatus.Idle,
  nearByStatus: RequestStatus.Idle,
};

const offerSlice = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    clear(state) {
      state.offer = null;
      state.nearByOffers = [];
    },
    updateOfferFavoriteStatus(state, action: PayloadAction<string>) {
      if (state.offer) {
        state.offer = { ...state.offer, isFavorite: action.payload === state.offer.id ? !state.offer.isFavorite : state.offer.isFavorite };
      }
      if (state.nearByOffers) {
        state.nearByOffers = state.nearByOffers.map((offer) =>
          offer.id === action.payload ? { ...offer, isFavorite: !offer.isFavorite } : offer
        );
      }
    },
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
        state.nearByStatus = RequestStatus.Success;
      })
      .addCase(fetchNearByOffersAction.rejected, (state) => {
        state.nearByStatus = RequestStatus.Failed;
      })
      .addCase(fetchNearByOffersAction.pending, (state) => {
        state.nearByStatus = RequestStatus.Loading;
      });
  },
});

export const selectOffer = (state: State) => state[NameSpace.Offer].offer;
export const selectNearByOffers = (state: State)=> state[NameSpace.Offer].nearByOffers;
export const selectComments = (state: State) => state[NameSpace.Offer].comments;
export const selectOfferStatus = (state: State) => state[NameSpace.Offer].status;
export const selectStatus = (state: State) => state[NameSpace.Offer].nearByStatus;

export const {updateOfferFavoriteStatus} = offerSlice.actions;

export const selectRequestStatus = createSelector(
  [selectOfferStatus],
  (status) => ({
    isLoading: status === RequestStatus.Loading,
    isSuccess: status === RequestStatus.Success,
    isError: status === RequestStatus.Failed,
    isIdle: status === RequestStatus.Idle,
  })
);

export const selectNearbyStatus = createSelector(
  [selectStatus],
  (status) => ({
    isLoading: status === RequestStatus.Loading || status === RequestStatus.Idle,
    isSuccess: status === RequestStatus.Success,
    isError: status === RequestStatus.Failed,
  })
);

export {offerSlice};
