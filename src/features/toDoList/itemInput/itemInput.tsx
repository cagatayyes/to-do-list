import React, { useState, useEffect, useCallback } from 'react';


export function ItemInput() {
    return (
        <div className='toDoList-inputContainer'>
            {/*    <input value={newItem} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setNewItem(event.target.value);
            }} />

            <button className='toDoList-saveButton' onClick={() => {
                setToDoList([...toDoList, { value: newItem, isDone: false }]);
                setNewItem('');
            }}>
                Add
            </button> */}
        </div>
    );
}