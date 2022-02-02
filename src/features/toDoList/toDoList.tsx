import React, { useState } from 'react';
import ClassNames from 'classnames';
import { v1 } from 'uuid';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { add, remove, changeListItemStatus } from './toDoListSlice';

import './toDoList.scss';

export interface IListItem {
    id: string;
    value: string;
    isDone: boolean;
}

export function ToDoList() {
    const [newItem, setNewItem] = useState('');
    const dispatch = useAppDispatch(); // direkt useAppDispatch içeride kullanılamıyor. neden?
    const toDoList = useAppSelector(state => state.toDoList);

    const addItem = () => {
        dispatch(add({ id: v1(), value: newItem, isDone: false }));

        setNewItem('');
    };

    const removeItem = (listItem: IListItem) => {
        dispatch(remove(listItem.id));
    }

    const changeStatus = (listItem: IListItem) => {
        dispatch(changeListItemStatus({ id: listItem.id, value: listItem.value, isDone: !listItem.isDone }));
    }


    return (
        <div className='toDoList'>
            <h3 className='toDoList-title'>
                MY TO DO LIST
            </h3>
            <div className='toDoList-content'>
                {
                    toDoList.length < 1 &&
                    <div className='toDoList-emptyList'>
                        NO LIST ITEMS :( <br />
                        Add some
                    </div>
                }
                {
                    toDoList.length > 0 &&
                    toDoList.map(listItem =>
                        <div className={ClassNames('toDoList-listItem')} key={listItem.id}>
                            <span className={ClassNames('toDoList-listItem-value', { 'toDoList-listItem-value-isDone': listItem.isDone })}>{listItem.value}</span>

                            <div className='toDoList-listItem-buttonsContainer'>
                                <button className='toDoList-listItem-buttonsContainer-doneButton' onClick={() => {
                                    changeStatus(listItem);
                                }}>
                                    Status: {listItem.isDone ? 'Done' : 'Undone'}
                                </button>

                                <button className='toDoList-listItem-buttonsContainer-deleteButton' onClick={() => {
                                    removeItem(listItem);
                                }}>Delete</button>
                            </div>
                        </div>
                    )
                }
            </div>

            <div>
                {
                    <div className='toDoList-inputContainer'>
                        <input value={newItem} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setNewItem(event.target.value);
                        }} />

                        <button className='toDoList-saveButton' onClick={() => addItem()}>
                            Add
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}