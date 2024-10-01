import React from 'react';

const TaskItem = ({ task, updateTask, deleteTask }) => {
  const toggleCompletion = () => {
    updateTask({ ...task, completed: !task.completed });
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <li>
      <h3 style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Priority: {task.priority}</p>
      <button onClick={toggleCompletion}>
        {task.completed ? 'Mark as Incomplete' : 'Mark as Completed'}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;
