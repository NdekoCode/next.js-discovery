"use client";
import { useReducer, useState } from "react";
const myTodos = [
  {
    id: 1,
    title: "Apprendre next.js",
  },
  {
    id: 2,
    title: "Faire un projet avec next.js",
  },
  {
    id: 3,
    title: "Se perfectionner avec next.js",
  },
];
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((d) => d.id !== action.payload),
      };
    default:
      return state;
  }
};
const todos = () => {
  const [state, dispatch] = useReducer(reducer, { tasks: myTodos });
  const [newTodo, setNewTodo] = useState("");
  const handleTodo = (evt) => {
    console.log(evt.target.value);
    setNewTodo(evt.target.value);
  };
  const addNewTodo = () => {
    if (newTodo.trim().length > 1) {
      const newTask = {
        id: state?.tasks[state.tasks.length - 1].id + 1,
        title: newTodo,
      };
      dispatch({ type: "ADD_TASK", payload: newTask });
      setNewTodo("");
    }
  };
  const deleteTodo = (todo) => {
    console.log(todo);
    if (todo?.id) {
      dispatch({ type: "DELETE_TASK", payload: todo?.id });
    }
  };
  return (
    <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
      <div className="mb-4">
        <h1 className="text-grey-darkest">Todo List</h1>
        <div className="flex mt-4">
          <input
            className="w-full px-3 py-2 mr-4 border rounded shadow appearance-none text-grey-darker"
            placeholder="Add Todo"
            value={newTodo}
            onChange={handleTodo}
          />
          <button
            onClick={addNewTodo}
            className="p-2 text-teal-500 border-2 border-teal-500 rounded flex-no-shrink hover:text-white hover:bg-teal-700"
          >
            Add
          </button>
        </div>
      </div>
      <div>
        {state.tasks.map((todo) => (
          <div key={todo.id} className="flex items-center mb-4">
            <p className="w-full text-grey-darkest">
              <span>{todo.id}</span>. {todo.title}
            </p>
            <button
              onClick={() => deleteTodo(todo)}
              className="flex-none p-2 ml-2 text-red-500 border-2 border-red-500 rounded flex-no-shrink hover:text-white hover:bg-red-700"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default todos;
