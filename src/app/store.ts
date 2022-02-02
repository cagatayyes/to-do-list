import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import toDoListReducer from '../features/toDoList/toDoListSlice';

export const store = configureStore({
  reducer: {
    toDoList: toDoListReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
