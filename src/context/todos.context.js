import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import todoReducer from "../reducers/todo-reducer";
import { useLocalStorageReducer } from "../hooks/useLocalStorageReducer";

const defaultTodos = [
  { id: uuidv4(), task: "buy plants", completed: false },
  { id: uuidv4(), task: "eat tacos", completed: true },
  { id: uuidv4(), task: "read by the beach", completed: false },
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer(
    "todos",
    defaultTodos,
    todoReducer
  );

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
