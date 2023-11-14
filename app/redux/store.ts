import {configureStore} from '@reduxjs/toolkit';
import weatherReducer from './reducers/Weather';
export const store = configureStore({
  reducer: {
    weatherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
