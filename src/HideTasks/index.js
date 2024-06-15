import '../section.css';

export default function HideTasks({ tasksTable, hideDoneTasks, toggleHideDoneTasks }) {

    if (tasksTable.length > 0) {

        return (
            <>
                <button className="sectionFlex__itemButton" onClick={toggleHideDoneTasks} >
                    {hideDoneTasks ? "Pokaż ukończone" : "Ukryj ukończone"}
                </button>
            </>
        )

    }
    return null;
}