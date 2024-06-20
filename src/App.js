import { useState } from 'react';
import NewTask from './NewTask';
import TasksList from './TasksList';

export default function App() {

  const [tasksTable, setTasksTable] = useState([]);

  const addNewTask = (taskName) => {
    setTasksTable(tasksTable => [...tasksTable, { id: tasksTable.length, content: taskName, done: false, }]);
  };

  const setAllDoneTasks = () => {
    setTasksTable(tasksTable => tasksTable.map((task) => (
      { ...task, done: true, }
    )));
  };

  return (
    <>
      <h1 className="h1">Lista zadań</h1>
      <NewTask addNewTask={addNewTask} />
      <TasksList tasksTable={tasksTable} setAllDoneTasks={setAllDoneTasks} />
    </>
  );
};
