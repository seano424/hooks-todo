import React from "react";
import useInput from "../hooks/useInput";

export default function TodoForm(props) {
  const [task, handleTaskChange, reset] = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleAdd(task)
    reset();
  }

  return (
    <form className="flex items-center pt-5" onSubmit={handleSubmit}>
      <input
        name="task"
        className="mx-4 pl-2 shadow focus:outline-none rounded py-2 w-64"
        type="text"
        placeholder="enter some new task to do"
        value={task}
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
