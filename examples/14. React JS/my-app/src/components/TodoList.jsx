export default function TodoList({tasks, onDelete}) {
    return (
        <ul class="tasks" id="tasks-container">
            {
                tasks.length === 0 && <li>No tasks found</li>
            }
            {tasks.map((task, index) => (
                <li key={index}>
                    <input type="checkbox" checked={task.completed} />
                    <label>{task.title}</label>
                    <button onClick={() => { onDelete(index) }}>Delete</button>
                </li>
            ))}
        </ul>
    )
}