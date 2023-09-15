import { useState } from "react";

import ToDoList from "../Fragments/ToDoList/ToDoList";

const ToDoListLayout = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if (text.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: text,
      };
      setTodos([...todos, newTodo]);
      setText("");
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="w-full">
      <h3 className="text-slate-900 text-2xl font-bold">To Do List</h3>

      <div className="my-5">
        <input
          type="text"
          placeholder="Tambahkan tugas..."
          value={text}
          className="p-2 border block w-full rounded"
          onChange={(e) => setText(e.target.value)}
        />
        <div className="flex justify-end items-center">
          <button
            className="mt-3 py-2 px-4 bg-blue-800 text-white rounded"
            onClick={handleAddTodo}
          >
            Tambah
          </button>
        </div>
      </div>
      <ToDoList todos={todos} onDelete={handleDeleteTodo} />
    </div>
  );
};

export default ToDoListLayout;
