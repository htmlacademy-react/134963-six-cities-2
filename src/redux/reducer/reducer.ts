import { createReducer } from '@reduxjs/toolkit';
import { setCity, setActiveOffer, selectSort, authenticateUser, setOffers, setLoadingStatus, setUserData } from '../action/action';
import { FullOffer } from '../../types/offer';
import { AuthorizationStatus, LOCATIONS, SORT_TYPES } from '../../const';
import { UserData } from '../../types/auth';

type State = {
  city: string;
  offers: FullOffer[];
  activeOfferId: string | null;
  selectedSort: string;
  isLoading: boolean;
  error: string | null;
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
}

const initialState: State = {
  city: LOCATIONS[0],
  offers: [],
  activeOfferId: null,
  selectedSort: SORT_TYPES[0].name,
  isLoading: false,
  error: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setActiveOffer, (state, action) => {
      state.activeOfferId = action.payload;
    })
    .addCase(selectSort, (state, action) => {
      state.selectedSort = action.payload;
    })
    .addCase(setLoadingStatus, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(authenticateUser, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    });
});

export { reducer };
