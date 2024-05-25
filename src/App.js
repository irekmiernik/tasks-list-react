import Form from './Form';

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
        </div>

        <ul className="sectionTasksList"></ul>
      </section>

    </>
  );
}
