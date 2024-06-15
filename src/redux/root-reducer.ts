import {combineReducers} from '@reduxjs/toolkit';
import { userSlice } from './slices/user/user-slice';
import { offersSlice } from './slices/offers/offers-slice';
import { uiSlice } from './slices/ui/ui';
import { NameSpace } from '../const';
import { commentSlice } from './slices/comments/comment-slice';
import { offerSlice } from './slices/offer/offer-slice';
import { favoriteSlice } from './slices/favorites/favorite-slice';

export const rootReducer = combineReducers({
  [NameSpace.User]: userSlice.reducer,
  [NameSpace.Offer]: offerSlice.reducer,
  [NameSpace.Offers]: offersSlice.reducer,
  [NameSpace.UserInterface]: uiSlice.reducer,
  [NameSpace.Comments]: commentSlice.reducer,
  [NameSpace.Favorites]: favoriteSlice.reducer,
});
