const todos = [];

document.addEventListener('DOMContentLoaded', () => {
    todos.push(getTodos());
    renderTodos();
});

function renderTodos() {
    const todosList = document.getElementById('todos');
    todosList.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.innerHTML = todo.title;
        todosList.appendChild(li);
    });
}

function getTodos() {
    return fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => console.log(json))
}