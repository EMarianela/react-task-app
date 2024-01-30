import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext)

  const handleSubmit = (ev) => {
    ev.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-gray-700 p-10 mb-4 rounded-b-md">
        <h1 className="text-white font-bold text-center py-3 text-lg">Crear tarea</h1>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="bg-slate-300 p-3 w-full mb-2 rounded-md"
        autoFocus
      />
      <textarea
        placeholder="Descripcion de tarea"
        onChange={(e) => setDescription(e.target.value)}
        className="bg-slate-300 w-full mb-2 rounded-md"
        value={description}
      ></textarea>
      <button
      className="bg-indigo-400 px-3 py-1 text-white rounded-md"
      >Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
