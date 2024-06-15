import '../section.css';

export default function ToggleDoneTasks({ tasksTable, setAllDoneTasks }) {

    if (tasksTable.length > 0) {

        return (
            <>
                <button
                    className="sectionFlex__itemButton"
                    disabled={tasksTable.filter((tableElement,) => {
                        if (!tableElement.done) { return tableElement } else { return null }
                    }).length === 0}
                    onClick={setAllDoneTasks}
                >
                    Ukończ wszystkie
                </button>
            </>
        )

    }
    return null;
}