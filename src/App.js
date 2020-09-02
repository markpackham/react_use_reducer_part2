import React, { useReducer, useState } from "react";

const ACTIONS = {
  ADD_TODO: "add-todo",
};

function reducer(todos, action) {}

export default function App() {
  const [state, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO });
    setName("");
  }

  return (
    <>
      <h1>
        useReducer Part 2 learned from
        https://www.youtube.com/watch?v=kK_Wqx3RnHk
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name=""
          id=""
        />
      </form>
    </>
  );
}
