const todos = [];

document.addEventListener('DOMContentLoaded', async () => {
    todos.push(...await getTodos());
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

async function getTodos() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')
    return await data.json();
}