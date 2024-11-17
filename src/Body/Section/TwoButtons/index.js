const TwoButtons = ({ taskSet, hideTasks, toggleHideTasks }) =>

    (taskSet.tasksTable.length > 0) &&
    (
        <>
            <button
                className="sectionFlex__itemButton"
                disabled={taskSet.tasksTable.every(({ done }) => !done)}
                onClick={toggleHideTasks}
            >
                {hideTasks ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className="sectionFlex__itemButton"
                disabled={taskSet.tasksTable.every(({ done }) => done)}
                onClick={taskSet.setAllTasksDone}
            >
                Ukończ wszystkie
            </button>
        </>
    );
export default TwoButtons;
