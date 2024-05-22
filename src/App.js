function App() {
  return (
    <>
      <h1 className="h1">Lista zadań</h1>

      <section className="section">
        <div className="sectionFlex sectionFlex--header">
          <h2 className="sectionFlex__itemContent h2">Dodaj nowe zadanie</h2>
        </div>

        <form className="sectionFlex">
          <input className="sectionFlex__itemContent" placeholder="Co jest do zrobienia?" autofocus />
          <button className="sectionFlex__itemButton">Dodaj zadanie</button>
        </form>
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

export default App;
