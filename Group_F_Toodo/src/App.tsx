import { useState } from "react";
import TodoList from "./components/Todo";
import type { Task } from "./components/Todo";

function App() {
  const initialTasks: Task[] = [
    { id: 1, text: "Exercise", completed: false, completedAt: null },
    { id: 2, text: "Go to shopping", completed: true, completedAt: "10:30 AM" },
    { id: 3, text: "Meet my friends", completed: false, completedAt: null },
    {
      id: 4,
      text: "Responding to client request",
      completed: false,
      completedAt: null,
    },
    {
      id: 5,
      text: "Finish writing the report",
      completed: false,
      completedAt: null,
    },
  ];

  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  return (
    <>
      <TodoList tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;
