const TasksList = ({ taskSet, hideTasks }) =>
(
    <ul className="sectionTasksList">
        {taskSet.tasksTable.map(task => (
            <li key={task.id}
                className={hideTasks && task.done ? "tasksListItemHidden" : "sectionFlex sectionFlex--tasksList"}
            >
                <button
                    className="sectionFlex__itemButton sectionFlex__itemButton--done"
                    onClick={() => { taskSet.setTaskDone(task.id) }}
                >
                    {task.done ? "✔" : ""}
                </button>
                <span className={task.done ? "sectionFlex__itemContent itemContentDone" : "sectionFlex__itemContent"} >
                    {task.content}
                </span>
                <button
                    className="sectionFlex__itemButton sectionFlex__itemButton--delete"
                    onClick={() => { taskSet.removeTask(task.id) }}
                >
                    🗑
                </button>
            </li>
        ))}
    </ul>
);
export default TasksList;