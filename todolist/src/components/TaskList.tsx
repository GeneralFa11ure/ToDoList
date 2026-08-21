import type { TaskType } from "../types/task";
import Task from "./Task";
import style from "./TaskList.module.css";

function TaskList({
  tasks,
  updateTask,
  deleteTask,
}: {
  tasks: TaskType[];
  updateTask: (updatedTask: TaskType) => void;
  deleteTask: (id: string) => void;
}) {
  return (
    <div className={style.TaskList}>
      <h1>Task List</h1>
      <div>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
