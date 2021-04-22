import React from 'react'
import Todo from './Todo'

export default function TodoList(props) {
  return (
    <div className="flex flex-col items-center justify-center pt-5">
      {props.todos.length > 0 && props.todos.map(todo => (
        <Todo key={todo.id} {...todo} handleEdit={props.handleEdit} handleDelete={props.handleDelete}/>
      ))}
    </div>
  )
}
