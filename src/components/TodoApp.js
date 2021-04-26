import React from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { TodosProvider } from "../context/todos.context";

export default function TodoApp() {
  return (
    <div className="shadow dark:rounded w-auto h-auto flex flex-col items-center mt-32 bg-white dark:bg-gray-800">
      <TodosProvider>
        <TodoForm />
        <TodoList />
      </TodosProvider>
    </div>
  );
}

// -TodoApp
//   -TodoForm
//   -TodoList
//     -Todo
