import '../section.css';

export default function TasksList(props) {
    return (
        <ul className="sectionTasksList">
            {props.tasksTable.map(task => (
                <li key={task.id} className="sectionFlex sectionFlex--tasksList">
                    <button className="sectionFlex__itemButton sectionFlex__itemButton--done">
                        {task.done ? "✔" : ""}
                    </button>
                    <span className={task.done ? "sectionFlex__itemContent itemContentDone" : "sectionFlex__itemContent"} >
                        {task.content}
                    </span>
                    <button className="sectionFlex__itemButton sectionFlex__itemButton--delete">🗑</button>
                </li>
            ))}
        </ul>
    );
};