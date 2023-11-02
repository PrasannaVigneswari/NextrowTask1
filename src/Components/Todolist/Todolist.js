import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { AddCircle } from '@mui/icons-material';

const Todolist = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get('name');
  
  const [idCounter, setIdCounter] = useState(0);
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [error, setError] = useState('');

  // Load tasks from local storage
  useEffect(() => {
    if (localStorage.getItem('localTasks')) {
      const storedList = JSON.parse(localStorage.getItem('localTasks'));
      setTodos(storedList);
      setIdCounter(storedList.length);
    }
  }, []);

  // Save tasks to local storage
  const saveTasks = (tasks) => {
    localStorage.setItem('localTasks', JSON.stringify(tasks));
  };

  // Add a new task
  const addTodo = () => {
    if (newTodo.trim() === '') {
      setError('Task cannot be empty');
      return;
    }

    const newTask = {
      id: idCounter,
      title: newTodo,
    };

    setTodos((prevTodos) => [...prevTodos, newTask]);
    setNewTodo('');
    setError('');

    // Increment the ID counter for the next task
    setIdCounter(idCounter + 1);
    saveTasks([...todos, newTask]);
  };

  // Handle changes in the new task input
  const handleNewTodoChange = (e) => {
    setNewTodo(e.target.value);
    setError('');
  };

  // Toggle task completion
  const toggleCompletion = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
    saveTasks(updatedTodos);
  };

  // Delete a task
  const deleteTodo = (index) => {
    const confirmation = window.confirm('Are you sure you want to delete?');
    if (confirmation) {
      const updatedTodos = [...todos];
      updatedTodos.splice(index, 1);
      setTodos(updatedTodos);
      saveTasks(updatedTodos);
    }
  };

  // Clear tasks with confirmation
  const handleClear = () => {
    const confirmation = window.confirm('Are you sure you want to clear?');
    if (confirmation) {
      setTodos([]);
      localStorage.removeItem('localTasks');
    }
  };

  return (
    <div className="p-10 h-screen">
      <h1 className='text-4xl font-serif font-semibold text-sky-800 text-center'>Hi, {name}</h1>
      <h1 className="text-4xl text-center font-serif mt-8">Todos</h1>
      <h2 className="text-3xl mt-10">Create Task</h2>

      <div className="mt-10">
        <TextField label="Add a new todo" variant="outlined" sx={{ marginTop: '20px' }} fullWidth value={newTodo} onChange={handleNewTodoChange} />
        <Button variant="contained" className="hover:bg-cyan-400 primary" sx={{ marginTop: '20px' }} startIcon={<AddCircle />} onClick={addTodo}>Add</Button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>

      <h4 className="text-3xl mt-10 mb-5">My Tasks</h4>
      <List>
        {todos.map((todo, index) => (
          <ListItem key={todo.id} className="flex items-center bg-cyan-100 rounded mt-5 shadow-md max-w-screen-sm">
            <Checkbox onClick={() => toggleCompletion(index)} checked={todo.completed} />
            <span>{todo.title}</span>
            <div className="ml-auto">
              <IconButton onClick={() => deleteTodo(index)}><DeleteIcon /></IconButton>
            </div>
          </ListItem>
        ))}
      </List>
      <Button variant="outlined" sx={{ marginTop: '20px' }} onClick={handleClear}>Clear</Button>
    </div>
  );
};

export default Todolist;
