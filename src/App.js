import Form from './Form';
import TwoButtons from './TwoButtons';
import TasksList from './TasksList';

const tasksTable = [
  { id: 1, content: "Pierwsze zadanie", done: true, },
  { id: 2, content: "Drugie zadanie", done: true, },
  { id: 3, content: "Ostatnie zadanie", done: true, },
];

const hideDoneTasks = false;

export default function App() {
  return (
    <>

      <h1 className="h1">Lista zadań</h1>

      <section className="section">
        <div className="sectionFlex sectionFlex--header">
          <h2 className="sectionFlex__itemContent h2">Dodaj nowe zadanie</h2>
        </div>
        <Form />
      </section>

      <section className="section">

        <div className="sectionFlex sectionFlex--header">
          <h2 className="sectionFlex__itemContent h2">Lista zadań</h2>
          <TwoButtons tasksTable={tasksTable} hideDoneTasks={hideDoneTasks} />
        </div>
        <TasksList tasksTable={tasksTable} />
      </section>

    </>
  );
};
