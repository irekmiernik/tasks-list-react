import '../section.css';

export default function Form() {
    return (
        <form className="sectionFlex">
            <input className="sectionFlex__itemContent" placeholder="Co jest do zrobienia?" autoFocus />
            <button className="sectionFlex__itemButton">Dodaj zadanie</button>
        </form>
    );
}
