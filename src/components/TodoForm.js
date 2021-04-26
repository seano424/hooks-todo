import React, { useContext } from "react";
import useInput from "../hooks/useInput";
import { DispatchContext } from "../context/todos.context";

export default function TodoForm(props) {
  const [value, handleTaskChange, reset] = useInput("");
  const dispatch = useContext(DispatchContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch({ type: "ADD", task: value });
    dispatch({ type: "ADD", task: value });
    reset();
  };

  return (
    <form className="flex items-center pt-5" onSubmit={handleSubmit}>
      <input
        name="task"
        className="mx-4 pl-2 shadow focus:outline-none rounded py-2 w-64"
        type="text"
        placeholder="enter some new task to do"
        value={value}
        onChange={handleTaskChange}
      />
      <button
        className="w-36 ml-8 font-bold rounded bg-red-200 py-2 px-3"
        type="submit"
      >
        Add New task
      </button>
    </form>
  );
}
