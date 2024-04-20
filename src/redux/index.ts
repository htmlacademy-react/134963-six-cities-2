import { configureStore } from '@reduxjs/toolkit';
import {reducer} from '../redux/reducer/reducer.ts';

export const store = configureStore({reducer});
