import NewTask from './NewTask';
import TasksList from './TasksList';

const tasksTable = [
  { id: 1, content: "Pierwsze zadanie", done: false, },
  { id: 2, content: "Drugie zadanie", done: true, },
  { id: 3, content: "Ostatnie zadanie", done: true, },
];

const hideDoneTasks = false;

export default function App() {
  return (
    <>
      <h1 className="h1">Lista zadań</h1>
      <NewTask />
      <TasksList tasksTable={tasksTable} hideDoneTasks={hideDoneTasks} />
    </>
  );
};
