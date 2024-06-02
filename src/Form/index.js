import '../section.css';

const Form = () =>
(
    <form className="sectionFlex">
        <input className="sectionFlex__itemContent" placeholder="Co jest do zrobienia?" autoFocus={true} />
        <button className="sectionFlex__itemButton">Dodaj zadanie</button>
    </form>
);

export default Form;