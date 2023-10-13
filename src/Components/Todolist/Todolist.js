import React, { useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AddCircle } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import './Todolist.css';

const Todolist = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get('name');
 
 const addTodo = () => {
    if (newTodo) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    
    <div className="todo-container">
       <p className='text-4xl font-semibold mt-10 text-center'>Welcome, {name}!</p> 
       <h1 className="text-4xl font-semibold mt-10 text-center" >Todo List</h1>
       
       <div className="flex gap-4 mt-10 align-center justify-center">
         <TextField label="Add a new todo" variant="outlined" value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)} />
         <Button variant="contained" color="primary"  className=" hover:bg-cyan-400" startIcon={<AddCircle />}
          onClick={addTodo} >Add </Button>
      </div>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="flex items-center justify-between bg-cyan-100 rounded p-2 mb-2 m-3 shadow-md">
            {todo}
            <button
              className="text-red-500"
              onClick={() => removeTodo(index)} > Remove </button>
            </li>))}
      </ul>
     
    </div>
  );
};

export default Todolist;
