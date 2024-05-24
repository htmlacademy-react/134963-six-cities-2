import { store } from '../redux/index.ts';
import {UiState} from '../redux/slices/ui/ui.ts';
import {UserState} from '../redux/slices/user/userSlice.ts';
import {OffersState} from '../redux/slices/offers/offersSlice.ts';

export type RootState = {
    ui: UiState;
    user: UserState;
    offers: OffersState;
  };

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
