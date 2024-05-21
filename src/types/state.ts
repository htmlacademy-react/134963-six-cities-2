import { store } from '../redux/store';
import {UiState} from '../redux/slices/ui/ui.ts';
import {UserState} from '../redux/slices/user/userSlice.ts';
import {OfferState} from '../redux/slices/offers/offersSlice.ts';

export type RootState = {
    ui: UiState;
    user: UserState;
    offers: OfferState;
  };

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
