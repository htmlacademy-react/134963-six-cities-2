import {combineReducers} from '@reduxjs/toolkit';
import { userSlice } from './slices/user/userSlice';
import { offersSlice } from './slices/offers/offersSlice';
import { uiSlice } from './slices/ui/ui';
import { NameSpace } from '../const';
import { commentSlice } from './slices/comments/commentSlice';
import { offerSlice } from './slices/offer/offerSlice';
import { favoriteSlice } from './slices/favorites/favoriteSlice';

export const rootReducer = combineReducers({
  [NameSpace.User]: userSlice.reducer,
  [NameSpace.Offer]: offerSlice.reducer,
  [NameSpace.Offers]: offersSlice.reducer,
  [NameSpace.UserInterface]: uiSlice.reducer,
  [NameSpace.Comments]: commentSlice.reducer,
  [NameSpace.Favorites]: favoriteSlice.reducer,
});
