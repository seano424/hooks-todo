import React, { useState } from "react";
import useInput from "../hooks/useInput";

export default function Todo(props) {
  const [crossedOut, setcrossedOut] = useState(false);
  const [editing, setEditing] = useState(false);
  const [value, handleValueChange, reset] = useInput(props.task);

  const handleChange = () => {
    setcrossedOut(!crossedOut);
  };

  const handleDelete = () => {
    props.handleDelete(props.id);
  };

  const toggleEdit = () => {
    setEditing(!editing);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(value);
    props.handleEdit(props.id, value)
    reset()
    setEditing(!editing)
  }

  const deleteClass = "bg-gradient-to-r from-red-400 to-red-500";
  const editClass = `bg-gradient-to-r from-green-400 to-blue-500`;

  return (
    <div className="flex p-4">
      {editing ? (
        <form onSubmit={handleSubmit}>
          <input
            autoFocus
            value={value}
            onChange={handleValueChange}
            className="mx-4 pl-12 uppercase shadow focus:outline-none rounded py-2 w-72"
            type="text"
          />
        </form>
      ) : (
        <>
          <input
            onChange={handleChange}
            type="checkbox"
            className={`line-through w-16 self-center checked:bg-blue-600 checked:border-transparent`}
          />
          <h1
            onClick={toggleEdit}
            className={`dark:text-white w-64 self-center ${crossedOut ? "line-through" : ""}`}
          >
            {props.task}
          </h1>
        </>
      )}
      <button
        onClick={crossedOut ? handleDelete : toggleEdit}
        className={`w-36 rounded px-5 text-white font-bold py-2 ${
          crossedOut ? deleteClass : editClass
        }`}
      >{`${crossedOut ? `Delete Task` : `Edit Task`}`}</button>
    </div>
  );
}
