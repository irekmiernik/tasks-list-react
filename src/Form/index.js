import { useState } from 'react';
import '../section.css';

const Form = ({ addNewTask }) => {

    const onDodajZadanie = (event) => {
        event.preventDefault();
        if (taskName.trim() !== "") {
            addNewTask(taskName.trim());
            setTaskName("");
        };
    };

    const [taskName, setTaskName] = useState("");

    return (
        <form className="sectionFlex" onSubmit={onDodajZadanie}>
            <input
                className="sectionFlex__itemContent"
                placeholder="Co jest do zrobienia?"
                autoFocus
                value={taskName}
                onChange={({ target }) => setTaskName(target.value)}
            />
            <button className="sectionFlex__itemButton">Dodaj zadanie</button>
        </form>
    );
}

export default Form;