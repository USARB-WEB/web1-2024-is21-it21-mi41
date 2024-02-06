const tasks = [
    {
        id: 1,
        title: 'Task 1',
        completed: true
    },
    {
        id: 2,
        title: 'Task 2',
        completed: true
    },
    {
        id: 3,
        title: 'Task 3',
        completed: false
    },
]

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
    renderTasks();
}

renderTasks();