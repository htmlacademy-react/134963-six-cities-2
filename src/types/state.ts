import { store } from '../redux/store';
import {UiState} from '../redux/slices/ui.ts';
import {UserState} from '../redux/slices/user.ts';
import {OfferState} from '../redux/slices/offers.ts';

export type RootState = {
    ui: UiState;
    user: UserState;
    offers: OfferState;
  };

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
