import type { TaskType } from "../types/task";
import style from "./Task.module.css";

function Task({
  task,
  updateTask,
  deleteTask,
}: {
  task: TaskType;
  updateTask: (updatedTask: TaskType) => void;
  deleteTask: (id: string) => void;
}) {
  return (
    <div className={style.Task}>
      <h1 className={style.TaskTitle}>{task.title}</h1>
      <p className={style.TaskDescription}>{task.description}</p>
      <p>{task.completed ? "Completed" : "Not Completed"}</p>

      <button
        onClick={() => updateTask({ ...task, completed: !task.completed })}
      >
        {task.completed ? "Mark Incomplete" : "Mark Completed"}
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default Task;
