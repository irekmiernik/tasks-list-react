import '../section.css';

export default function ToggleDoneTasks(props) {

    if (props.tasksTable.length > 0) {

        const tab = props.tasksTable.filter((tableElement,) => { if (!tableElement.done) { return tableElement } else { return null } });
        return (
            <>
                <button className="sectionFlex__itemButton" disabled={tab.length === 0}>
                    Ukończ wszystkie
                </button>
            </>
        )

    }
    return null;
}