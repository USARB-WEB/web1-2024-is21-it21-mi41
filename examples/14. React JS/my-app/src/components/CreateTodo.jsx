import React, { useState } from 'react';

export default function CreateTodo({ addTask }) {

    const [newTask, setNewTask] = useState('Hello World!');

    function saveTask(){
        addTask(newTask);
        setNewTask('');
    }

    return (
        <div>
            <input
                type="text"
                id='task-input'
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={saveTask}>Add</button>
        </div>
    )
}