import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FullOffer } from '../../../types/offer';
import { RequestStatus, NameSpace } from '../../../const';
import { fetchFavoriteAction, toggleFavoriteAction } from './favoriteThunks';
import { State } from '../../../types/state';

interface FavoriteState {
  favorites: FullOffer[];
  status: RequestStatus;

}

const initialState: FavoriteState = {
  favorites: [],
  status: RequestStatus.Idle,
};

const favoriteSlice = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavoriteAction.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchFavoriteAction.fulfilled, (state, action: PayloadAction<FullOffer[]>) => {
        state.status = RequestStatus.Success;
        state.favorites = action.payload;
      })
      .addCase(fetchFavoriteAction.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(toggleFavoriteAction.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(toggleFavoriteAction.fulfilled, (state) => {
        state.status = RequestStatus.Success;
      })
      .addCase(toggleFavoriteAction.rejected, (state) => {
        state.status = RequestStatus.Failed;
      });
  },
});

export const selectFavoriteOffers = (state: State) => state[NameSpace.Favorites].favorites;
export const selectFavoriteStatus = (state: State) => state[NameSpace.Favorites].status;

export const selectFavoriteRequestStatusDetails = createSelector(
  [selectFavoriteStatus],
  (status) => ({
    isLoading: status === RequestStatus.Loading,
    isSuccess: status === RequestStatus.Success,
    isError: status === RequestStatus.Failed,
    isIdle: status === RequestStatus.Idle,
  })
);

export {favoriteSlice};
