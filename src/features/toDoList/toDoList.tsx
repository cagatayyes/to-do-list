import React, { useState, useEffect, useCallback } from 'react';
import ClassNames from 'classnames';

import './toDoList.scss';

interface IListItem {
    value: string;
    isDone: boolean;
}

export function ToDoList() {
    const [toDoList, setToDoList] = useState([] as Array<IListItem>);
    const [newItem, setNewItem] = useState('');
    const stringifyToDoList = JSON.stringify(toDoList)

    useEffect(() => {
        console.log("use eeffect");

    }, [stringifyToDoList]);

    console.log("render");


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
                        You can add some
                    </div>
                }
                {
                    toDoList.length > 0 &&
                    toDoList.map((listItem, index) =>
                        <div className={ClassNames('toDoList-listItem')} key={Math.random()}>
                            <span className={ClassNames('toDoList-listItem-value', { 'toDoList-listItem-value-isDone': listItem.isDone })}>{listItem.value}</span>

                            <div className='toDoList-listItem-buttonsContainer'>
                                <button className='toDoList-listItem-buttonsContainer-doneButton' onClick={() => {
                                    const itemToBeSet = index;

                                    toDoList.splice(itemToBeSet, 1, { value: listItem.value, isDone: !listItem.isDone });

                                    setToDoList([...toDoList]);
                                }}>
                                    Status: {listItem.isDone ? 'Done' : 'Undone'}
                                </button>

                                <button className='toDoList-listItem-buttonsContainer-deleteButton' onClick={() => {
                                    const newList = toDoList.filter(item => item.value !== listItem.value);
                                    setToDoList(newList);
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

                        <button className='toDoList-saveButton' onClick={() => {
                            setToDoList([...toDoList, { value: newItem, isDone: false }]);
                            setNewItem('');
                        }}>
                            Add
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}