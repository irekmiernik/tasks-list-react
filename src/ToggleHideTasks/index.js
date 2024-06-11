import '../section.css';

export default function ToggleHideTasks(props) {

    if (props.tasksTable.length > 0) {

        return (
            <>
                <button className="sectionFlex__itemButton">
                    {props.hideDoneTasks ? "Pokaż ukończone" : "Ukryj ukończone"}
                </button>
            </>
        )

    }
    return null;
}