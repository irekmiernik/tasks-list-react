import { useState } from 'react';
import Body from './Body';
import Header from './Body/Header';
import Section from './Body/Section';
import Form from './Body/Section/Form';
import TwoButtons from './Body/Section/TwoButtons';
import TasksList from './Body/Section/TasksList';

function App() {
  const [tasksTable, setTasksTable] = useState([]);

  const addTask = (taskName) => {
    setTasksTable(tasksTable => [...tasksTable, { id: tasksTable.length, content: taskName, done: false, }]);
  };

  const [hideDoneTasks, setHideDoneTasks] = useState(false);

  const toggleHideDoneTasks = () => setHideDoneTasks(hideDoneTasks => !hideDoneTasks);

  const setAllTasksDone = () => {
    setTasksTable(tasksTable => tasksTable.map((task) => ({ ...task, done: true, })));
  };

  const setTaskDone = (id) => {
    setTasksTable(tasksTable => tasksTable.map((task) => {
      if (task.id === id) return { ...task, done: !task.done }; else return task;
    }));
  };

  const removeTask = (id) => {
    setTasksTable(tasksTable => tasksTable.filter(task => task.id !== id));
    setTasksTable(tasksTable => tasksTable.map((task, index) => ({ ...task, id: index })));
  };


  return (
    <Body>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form addTask={addTask} />} />
      <Section
        title="Lista zadań"
        twoButtons={<TwoButtons tasksTable={tasksTable} hideDoneTasks={hideDoneTasks}
          toggleHideDoneTasks={toggleHideDoneTasks} setAllTasksDone={setAllTasksDone} />}
        body={<TasksList tasksTable={tasksTable} hideDoneTasks={hideDoneTasks}
          removeTask={removeTask} setTaskDone={setTaskDone} />}
      />
    </Body>
  );
};

export default App;
