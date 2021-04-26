import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "./useLocalStorage";

export default function useTodoState(initialTodos) {
  const [todos, setTodos] = useLocalStorage("todos", initialTodos);
  return {
    todos,
    addTodo: (task) => {
      const newTodo = {
        id: uuidv4(),
        task: task,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    },
    deleteTodo: (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    editTodo: (id, newTask) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, task: newTask } : todo
      );
      setTodos(updatedTodos);
    },
  };
}
