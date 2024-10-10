import { useState } from 'react';

const Form = ({ addTask }) => {

    const onDodajZadanie = (event) => {
        event.preventDefault();
        if (taskName.trim() !== "") {
            addTask(taskName.trim());
            setTaskName("");
        };
    };

    const [taskName, setTaskName] = useState("");

    return (
        <form className="sectionFlex" onSubmit={onDodajZadanie}>
            <input
                className="sectionFlex__itemContent"
                placeholder="Co jest do zrobienia?"
                value={taskName}
                onChange={({ target }) => setTaskName(target.value)}
            />
            <button className="sectionFlex__itemButton">Dodaj zadanie</button>
        </form>
    );
}

export default Form;