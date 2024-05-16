import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { FullOffer } from '../../types/offer';
import { AppDispatch, State } from '../../types/state';
import { ApiRoute, AuthorizationStatus } from '../../const';
import { setOffers, authenticateUser, setLoadingStatus, setUserData } from '../action/action';
import { Auth, UserData } from '../../types/auth';
import { dropToken, saveToken } from '../../services/token';

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

export const loginAction = createAsyncThunk<void, Auth, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {

    const {data} = await api.post<UserData>(ApiRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(authenticateUser(AuthorizationStatus.Auth));
    dispatch(setUserData(data));
  }
);

export const logoutAction = createAsyncThunk<void, void, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(ApiRoute.Logout);
    dropToken();
    dispatch(authenticateUser(AuthorizationStatus.NoAuth));
    dispatch(setUserData(null));
  }
);
