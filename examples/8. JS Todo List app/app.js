const tasks = [];

document.addEventListener('DOMContentLoaded', () => {
    const tasksLocalStorage = localStorage.getItem('tasks');
    if (tasksLocalStorage) {
        const tasksFromDatabase = JSON.parse(tasksLocalStorage);
        
        tasks.push(...tasksFromDatabase);
    }
    renderTasks();
});

const tasksContainer = document.getElementById('tasks-container');


function renderTasks() {
    tasksContainer.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');

        const taskItemCheckbox = document.createElement('input');
        taskItemCheckbox.type = 'checkbox';
        taskItemCheckbox.checked = task.completed;
        taskItem.appendChild(taskItemCheckbox);

        const taskItemTitle = document.createElement('label');
        taskItemTitle.textContent = task.title;
        taskItem.appendChild(taskItemTitle);

        const taskItemDeleteButton = document.createElement('button');
        taskItemDeleteButton.textContent = 'Delete';
        taskItemDeleteButton.addEventListener('click', () => {
            if(confirm('Are you sure you want to delete this task?')){
                tasks.splice(index, 1);
                renderTasks();
                saveTasks();
            } 
        });
        taskItem.appendChild(taskItemDeleteButton);

        tasksContainer.appendChild(taskItem);
    });
}

const addButton = document.getElementById('addButton');
addButton.addEventListener('click', addTask);

function addTask() {
    tasks.push({
        id: tasks.length + 1,
        title: document.getElementById('task-input').value,
        completed: false
    });

    
    saveTasks();
    renderTasks();
}

function saveTasks() {
    const tasksJson = JSON.stringify(tasks);
    localStorage.setItem('tasks', tasksJson);
}

renderTasks();