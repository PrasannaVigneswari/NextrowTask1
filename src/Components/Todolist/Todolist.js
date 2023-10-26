import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useLocation } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { AddCircle } from '@mui/icons-material';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const Todolist = () => {
  
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get('name');
  const [idCounter, setIdCounter] = useState(0);
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [error, setError] = useState('');
  // Load tasks from local storage on component mount
  useEffect(() => {
    if (localStorage.getItem("localTasks")) {
      const storedList = JSON.parse(localStorage.getItem("localTasks"));
      setTodos(storedList);
    }
  }, []);
  // Add a new task with validation for an empty task
  const addTodo = () => {
    if (newTodo.trim() === '') {
      setError('Task cannot be empty');
      return;
    }
    const newTask = { //current value of the ID counter as the ID
      id: idCounter, title: newTodo,
    };
    setTodos([...todos, newTask]);
    localStorage.setItem('localTasks', JSON.stringify([...todos, newTask]));
    setNewTodo('');
    setError(''); 
    setIdCounter(idCounter + 1); // Increment the ID counter for the next task
  };
  const toggleCompletion = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
    localStorage.setItem("localTasks", JSON.stringify(updatedTodos));
  };
  // Remove a task with confirmation
  const deleteTodo = (index) => {
    const confirmation = window.confirm('Are you sure you want to delete?');
    if (confirmation) {
      const updatedTodos = [...todos];
      updatedTodos.splice(index, 1);
      setTodos(updatedTodos); 
      localStorage.setItem("localTasks", JSON.stringify(updatedTodos));
    } 
  };
  //Clear tasks with confirmation
  const handleClear = () => {
    const confirmation = window.confirm("Are you sure you want to clear?");
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
        <TextField label="Add a new todo" variant="outlined" fullWidth value={newTodo}
          onChange={(e) => {setNewTodo(e.target.value);
          setError('');
          }} />
        <Button variant="contained" className="hover:bg-cyan-400 primary" sx={{ marginTop: "20px" }}
          startIcon={<AddCircle />} onClick={addTodo} > Add </Button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>

      <h4 className="text-3xl mt-10 mb-5">My Tasks</h4>
       <List>
        {todos.map((todo, index) => (
          <ListItem key={todo.id} className={`flex items-center bg-cyan-50 rounded mt-5 shadow-md max-w-screen-sm`} >
            <Checkbox onClick={() => toggleCompletion(index)} checked={todo.completed} />
            <span >{todo.title}</span>
            <div className="ml-auto">
              <IconButton onClick={() => deleteTodo(index)}> <DeleteIcon /> </IconButton>
            </div>
          </ListItem>
        ))}
      </List>
      <Button variant="outlined" sx={{ marginTop: "20px" }} 
       onClick={()=>handleClear()}> clear</Button>
    </div>
  );
}
export default Todolist;
