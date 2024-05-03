import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { FullOffer } from '../../types/offer';
import { AppDispatch, State } from '../../types/state';
import { ApiRoute, AuthorizationStatus } from '../../const';
import { setOffers, authenticateUser, setLoadingStatus } from '../action/action';

export const fetchOffers = createAsyncThunk<void, undefined, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setLoadingStatus(true));
    const { data } = await api.get<FullOffer[]>(ApiRoute.Offers);
    dispatch(setLoadingStatus(false));
    dispatch(setOffers(data));
  });

export const checkAuth = createAsyncThunk<void, undefined, {dispatch: AppDispatch; state: State; extra: AxiosInstance}> (
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    await api.get(ApiRoute.Login);
    try {
      dispatch(authenticateUser(AuthorizationStatus.Auth));
    } catch {
      dispatch(authenticateUser(AuthorizationStatus.NoAuth));
    }
  }
);
