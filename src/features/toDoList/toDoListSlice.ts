import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IListItem } from './toDoList';

const initialState: Array<IListItem> = [];

export const toDoListSlice = createSlice({
    name: 'toDoList',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<IListItem>) => {
            state.push(action.payload);
        },
        remove: (state, action: PayloadAction<string>) => {
            return state.filter(list => list.id !== action.payload);
        },
        changeListItemStatus: (state, action: PayloadAction<IListItem>) => {
            return state.map(listItem => listItem.id === action.payload.id ? { ...listItem, isDone: action.payload.isDone } : listItem);
        }
    }
});


export default toDoListSlice.reducer;
export const { add, remove, changeListItemStatus } = toDoListSlice.actions;


