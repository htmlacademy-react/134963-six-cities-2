import { store } from '../redux/index.ts';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
