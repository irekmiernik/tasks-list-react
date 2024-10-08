const TwoButtons = ({ tasksTable, hideDoneTasks, toggleHideDoneTasks, setAllTasksDone }) =>

    (tasksTable.length > 0) &&
    (
        <>
            <button
                className="sectionFlex__itemButton"
                disabled={tasksTable.every(({ done }) => !done)}
                onClick={toggleHideDoneTasks}
            >
                {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className="sectionFlex__itemButton"
                disabled={tasksTable.every(({ done }) => done)}
                onClick={setAllTasksDone}
            >
                Ukończ wszystkie
            </button>
        </>
    );
export default TwoButtons;
