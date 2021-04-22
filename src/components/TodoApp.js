import React from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import useTodoState from '../hooks/useTodoState'
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from '../hooks/useLocalStorage'

export default function TodoApp() {

  const initialTodos = [
    { id: uuidv4(), task: "buy plants", completed: false },
    { id: uuidv4(), task: "eat tacos", completed: true },
    { id: uuidv4(), task: "read by the beach", completed: false },
  ];

  const initialItems = JSON.parse(window.localStorage.getItem('todos')) || initialTodos
  const { todos, addTodo, deleteTodo, editTodo } = useTodoState(initialItems)

  const [mood, setMood] = useLocalStorage('mood', 'happy')
  console.log(mood);

  return (
    <div className="shadow dark:rounded w-auto h-auto flex flex-col items-center mt-32 bg-white dark:bg-gray-800">
      <TodoForm handleAdd={addTodo} />
      <TodoList todos={todos} handleDelete={deleteTodo} handleEdit={editTodo} />
    </div>
  );
}

// -TodoApp
//   -TodoForm
//   -TodoList
//     -Todo
