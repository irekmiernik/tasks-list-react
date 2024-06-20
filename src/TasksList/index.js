import { useState } from 'react';
import HideTasks from '../HideTasks';
import AllDoneTasks from '../AllDoneTasks';
import Tasks from '../Tasks';
import '../section.css';

export default function TasksList({ tasksTable, setAllDoneTasks }) {

    const [hideDoneTasks, setHideDoneTasks] = useState(false);
    const toggleHideDoneTasks = () => setHideDoneTasks(hideDoneTasks => !hideDoneTasks);

    return (
        <section className="section">
            <div className="sectionFlex sectionFlex--header">
                <h2 className="sectionFlex__itemContent h2">Lista zadań</h2>
                <HideTasks tasksTable={tasksTable} hideDoneTasks={hideDoneTasks} toggleHideDoneTasks={toggleHideDoneTasks} />
                <AllDoneTasks tasksTable={tasksTable} setAllDoneTasks={setAllDoneTasks} />
            </div>
            <Tasks tasksTable={tasksTable} hideDoneTasks={hideDoneTasks} />
        </section>
    );
};