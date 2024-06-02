import '../section.css';

export default function TwoButtons(props) {

    if (props.tasksTable.length > 0) {

        return (
            <>
                <button className="sectionFlex__itemButton">
                    {props.hideDoneTasks ? "Pokaż ukończone" : "Ukryj ukończone"};
                </button>

                <button className="sectionFlex__itemButton" disabled={props.tasksTable.filter((tableElement,) => {
                    if (!tableElement.done) return tableElement;
                }).length === 0}>
                    Ukończ wszystkie
                </button>
            </>
        )

    } else {
        return null;
    }
}