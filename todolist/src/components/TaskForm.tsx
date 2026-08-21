import { useState } from "react";
import type { TaskType } from "../types/task";
import style from "./TaskForm.module.css";

function TaskForm({ addTask }: { addTask: (task: TaskType) => void }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    if (!title.trim() || !description.trim()) {
      alert("Please fill in both the title and description.");
      e.preventDefault();
      return;
    }
    e.preventDefault();
    const newTask = {
      id: crypto.randomUUID(),
      title,
      description,
      completed: false,
    };
    addTask(newTask);
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={style.TaskForm}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </>
  );
}

export default TaskForm;
