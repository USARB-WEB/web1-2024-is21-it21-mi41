import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const tasksLocalStorage = localStorage.getItem('tasks');
    if (tasksLocalStorage) {
      setTasks(JSON.parse(tasksLocalStorage));
    }
  }, []);



  const [newTask, setNewTask] = useState('Hello World!');


  function saveTasksToLocalStorage() {
    const tasksJson = JSON.stringify(tasks);
    localStorage.setItem('tasks', tasksJson);
  }

  function addTask() {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        title: newTask,
        completed: false
      }
    ]);
    // tasks.push({
    //   id: tasks.length + 1,
    //   title: newTask,
    //   completed: false
    // });
    setNewTask('');
    saveTasksToLocalStorage();
  }

  function deleteTask(index) {
    setTasks(tasks.filter((task, i) => i !== index));
    saveTasksToLocalStorage();
  }

  return (
    <>
      <ul class="tasks" id="tasks-container">
        {
          tasks.length === 0 && <li>No tasks found</li>
        }
        {tasks.map((task, index) => (
          <li key={index}>
            <input type="checkbox" checked={task.completed} />
            <label>{task.title}</label>
            <button onClick={() => { deleteTask(index) }}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        id='task-input'
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
    </>
  );
}

export default App;
