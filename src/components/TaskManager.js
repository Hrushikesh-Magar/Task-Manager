import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './taskManager.css';
import './task.css';
const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const addTask = (task) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const updateTask = (updatedTask) => {
    const newTasks = tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task));
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const filterTasks = (filter) => {
    return tasks.filter((task) => {
      if (filter === 'all') return true;
      if (filter === 'completed') return task.completed;
      if (filter === 'overdue') return !task.completed && new Date(task.dueDate) < new Date();
      return task.priority === filter;
    });
  };

  return (
    <div className="task-manager">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
        filterTasks={filterTasks}
      />
    </div>
  );
};

export default TaskManager;
