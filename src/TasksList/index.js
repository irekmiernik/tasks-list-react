import '../section.css';

export default function TasksList(props) {
    return (
        <ul className="sectionTasksList">
            {props.tasksTable.map(task => (
                <li key={task.id}>
                    {task.content}
                </li>
            ))}
        </ul>
    );
};