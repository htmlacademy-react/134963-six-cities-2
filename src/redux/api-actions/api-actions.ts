import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { FullOffer } from '../../types/offer';
import { AppDispatch, State } from '../../types/state';
import { ApiRoute } from '../../const';
import { Auth, UserData } from '../../types/auth';
import { dropToken, saveToken } from '../../services/token';

export const fetchOffers = createAsyncThunk<FullOffer[], undefined, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>(
  'data/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<FullOffer[]>(ApiRoute.Offers);
    return data;
  });

export const checkAuth = createAsyncThunk<UserData, undefined, {dispatch: AppDispatch; state: State; extra: AxiosInstance}> (
  'user/checkAuth',
  async (_arg, { extra: api}) => {
    const { data } = await api.get<UserData>(ApiRoute.Login);
    return data;
  }
);

export const loginAction = createAsyncThunk<UserData, Auth, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {extra: api}) => {
    const {data} = await api.post<UserData>(ApiRoute.Login, {email, password});
    saveToken(data.token);
    return data;
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { extra: api}) => {
    await api.delete(ApiRoute.Logout);
    dropToken();

  }
);
