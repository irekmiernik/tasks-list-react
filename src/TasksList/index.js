import HideAndAllDoneTasksButtons from '../HideAndAllDoneTasksButtons';
import Tasks from '../Tasks';
import '../section.css';

export default function TasksList(props) {
    return (
        <section className="section">
            <div className="sectionFlex sectionFlex--header">
                <h2 className="sectionFlex__itemContent h2">Lista zadań</h2>
                <HideAndAllDoneTasksButtons tasksTable={props.tasksTable} hideDoneTasks={props.hideDoneTasks} />
            </div>
            <Tasks tasksTable={props.tasksTable} hideDoneTasks={props.hideDoneTasks} />
        </section>
    );
};