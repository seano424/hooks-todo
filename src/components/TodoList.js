import React, { useContext } from "react";
import Todo from "./Todo";
import { TodosContext } from "../context/todos.context";

export default function TodoList(props) {
  const todos = useContext(TodosContext);
  return (
    <div className="flex flex-col items-center justify-center pt-5">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          {...todo}
          handleEdit={props.handleEdit}
          handleDelete={props.handleDelete}
        />
      ))}
    </div>
  );
}
