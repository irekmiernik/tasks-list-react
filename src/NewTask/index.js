import Form from '../Form';
import '../section.css';

const NewTask = ({ addNewTask }) =>
(
    <section className="section">
        <div className="sectionFlex sectionFlex--header">
            <h2 className="sectionFlex__itemContent h2">Dodaj nowe zadanie</h2>
        </div>
        <Form addNewTask={addNewTask} />
    </section>
)

export default NewTask;