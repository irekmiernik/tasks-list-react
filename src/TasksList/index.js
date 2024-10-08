const TasksList = ({ tasksTable, hideDoneTasks, removeTask, setTaskDone }) =>
(
    <ul className="sectionTasksList">
        {tasksTable.map(task => (
            <li key={task.id}
                className={hideDoneTasks && task.done ? "tasksListItemHidden" : "sectionFlex sectionFlex--tasksList"}
            >
                <button
                    className="sectionFlex__itemButton sectionFlex__itemButton--done"
                    onClick={() => { setTaskDone(task.id) }}
                >
                    {task.done ? "✔" : ""}
                </button>
                <span className={task.done ? "sectionFlex__itemContent itemContentDone" : "sectionFlex__itemContent"} >
                    {task.content}
                </span>
                <button
                    className="sectionFlex__itemButton sectionFlex__itemButton--delete"
                    onClick={() => { removeTask(task.id) }}
                >
                    🗑
                </button>
            </li>
        ))}
    </ul>
);
export default TasksList;