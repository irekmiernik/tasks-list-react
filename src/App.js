import { useState } from 'react';
import { useTasks } from './useTasks';
import Body from './Body';
import Header from './Body/Header';
import Section from './Body/Section';
import Form from './Body/Section/Form';
import TwoButtons from './Body/Section/TwoButtons';
import TasksList from './Body/Section/TasksList';

function App() {

  const taskSet = useTasks();

  const [hideTasks, setHideTasks] = useState(false);
  const toggleHideTasks = () => setHideTasks(hideTasks => !hideTasks);

  return (
    <Body>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form taskSet={taskSet} />} />
      <Section
        title="Lista zadań"
        twoButtons={<TwoButtons taskSet={taskSet} hideTasks={hideTasks} toggleHideTasks={toggleHideTasks} />}
        body={<TasksList taskSet={taskSet} hideTasks={hideTasks} />}
      />
    </Body>
  );
};

export default App;
