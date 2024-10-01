import React, { useState } from 'react';
import TaskItem from './TaskItem';
import './task.css';

const TaskList = ({ tasks, updateTask, deleteTask, filterTasks }) => {
  const [filter, setFilter] = useState('all');

  const filteredTasks = filterTasks(filter);

  return (
    <div>
      <h2>Tasks</h2>
      <label>
        Filter:
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="overdue">Overdue</option>
          <option value="High">High Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="Low">Low Priority</option>
        </select>
      </label>
      <ul>
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
