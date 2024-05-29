import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { FullOffer } from '../../../types/offer';
import { ApiRoute } from '../../../const';
import { State } from '../../../types/state';


export const fetchOfferByIdAction = createAsyncThunk<FullOffer, string, { state: State; extra: AxiosInstance }>(
  'data/fetchOfferById',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<FullOffer>(`${ApiRoute.Offers}/${offerId}`);
    return data;
  }
);

export const fetchNearByOffersAction = createAsyncThunk<FullOffer[], string, { state: State; extra: AxiosInstance }>(
  'data/fetchNearByOffers',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<FullOffer[]>(`${ApiRoute.Offers}/${offerId}/nearby`);
    return data;
  }
);
