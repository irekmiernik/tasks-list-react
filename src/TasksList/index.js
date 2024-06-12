import { useState } from 'react';
import ToggleHideTasks from '../ToggleHideTasks';
import ToggleDoneTasks from '../ToggleDoneTasks';
import Tasks from '../Tasks';
import '../section.css';

export default function TasksList({ tasksTable }) {

    const [hideDoneTasks, setHideDoneTasks] = useState(false);
    const toggleHideDoneTasks = () => setHideDoneTasks(hideDoneTasks => !hideDoneTasks);

    return (
        <section className="section">
            <div className="sectionFlex sectionFlex--header">
                <h2 className="sectionFlex__itemContent h2">Lista zadań</h2>
                <ToggleHideTasks tasksTable={tasksTable} hideDoneTasks={hideDoneTasks} toggleHideDoneTasks={toggleHideDoneTasks} />
                <ToggleDoneTasks tasksTable={tasksTable} hideDoneTasks={hideDoneTasks} />
            </div>
            <Tasks tasksTable={tasksTable} hideDoneTasks={hideDoneTasks} />
        </section>
    );
};