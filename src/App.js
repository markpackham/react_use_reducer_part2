import React, { useReducer, useState } from "react";
import Todo from "./Todo.js";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

// one reducer function can handle so many use cases rather than writing a ton of handleClick, handleAdd, handleDelete
function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        // if it isn't equal to the current todo then return as is unmodified
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      // only keep the todos if they are not equal to our payload id
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

export default function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // awesome thing about useReducer is we can just use 1 function with different parameters to handle stuff
    // so we don't end up having to write lots of callbacks for adding, editing or deleting
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }

  console.log(todos);

  return (
    <>
      <h1>
        useReducer Part 2 learned from
        https://www.youtube.com/watch?v=kK_Wqx3RnHk
      </h1>
      <p>Hit return after creating the todo to populate the list.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name=""
          id=""
        />
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </>
  );
}
