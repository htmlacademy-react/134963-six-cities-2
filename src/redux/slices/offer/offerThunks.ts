import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { FullOffer } from '../../../types/offer';
import { ApiRoute } from '../../../const';
import { AppDispatch, State } from '../../../types/state';


export const fetchOfferByIdAction = createAsyncThunk<FullOffer, FullOffer['id'], { dispatch: AppDispatch; state: State; extra: AxiosInstance }>(
  'data/fetchOfferById',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<FullOffer>(`${ApiRoute.Offers}/${offerId}`);
    return data;
  }
);

export const fetchNearByOffersAction = createAsyncThunk<FullOffer[], string, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>(
  'data/fetchNearByOffers',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<FullOffer[]>(`${ApiRoute.Offers}/${offerId}/nearby`);
    return data;
  }
);
