import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TotodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo"
        className="w-full border border-black/10 rounded-lg-lg px-3 outline-none duration-30 "
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 bg-blue-400 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TotodoForm;
