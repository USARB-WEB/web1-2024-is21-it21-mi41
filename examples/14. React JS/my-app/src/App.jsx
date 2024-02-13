import './App.css';
import { useEffect, useState } from 'react';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const tasksLocalStorage = localStorage.getItem('tasks');
    if (tasksLocalStorage) {
      setTasks(JSON.parse(tasksLocalStorage));
    }
  }, []);

  function saveTasksToLocalStorage() {
    const tasksJson = JSON.stringify(tasks);
    localStorage.setItem('tasks', tasksJson);
  }

  function addTask(newTask) {
    console.log(newTask);
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        title: newTask,
        completed: false
      }
    ]);
    
    saveTasksToLocalStorage();
  }

  function deleteTask(index) {
    setTasks(tasks.filter((task, i) => i !== index));
    saveTasksToLocalStorage();
  }

  return (
    <>
      <TodoList
        tasks={tasks}
        onDelete={deleteTask}
      />
      <CreateTodo
        addTask={addTask}
      />
    </>
  );
}

export default App;
