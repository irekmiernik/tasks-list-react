import NewTask from './NewTask';
import TasksList from './TasksList';

export default function App() {

  return (
    <>
      <h1 className="h1">Lista zadań</h1>
      <NewTask />
      <TasksList />
    </>
  );
};
