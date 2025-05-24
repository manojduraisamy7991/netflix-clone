
import React, { useState } from 'react';

interface Task {
  id: number;
  task: string;
}

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, task: "dfgdfg gdfgdf dfgdfgdf fgdgfgdfgdfgdfgdfgdfgdfgdfg" },
    { id: 2, task: "dfgdfg gdfgdf dfgdfgdf fgdgfgdfgdfg" },
    { id: 3, task: "This is a very long task description that should be truncated with ellipsis when it overflows the container width" },
    { id: 4, task: "Short task" }
  ]);

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="task-container max-w-4xl mx-auto p-6 space-y-4">
      {tasks.map((task, i) => {
        return (
          <div className="task-card bg-white rounded-lg shadow-md p-4 flex items-center gap-4 border border-gray-200" key={task.id}>
            <h1 className="text-lg font-semibold text-gray-800 min-w-[2rem]">{i + 1}</h1>
            <p className="task-text flex-1 text-gray-700 overflow-hidden text-ellipsis whitespace-nowrap">
              {task.task}
            </p>
            <button 
              className="delete-btn bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors duration-200 font-medium min-w-[80px]"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
