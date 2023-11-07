
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {TextField,Button,List,ListItem,Checkbox,IconButton,} from "@mui/material";
import { AddCircle, Delete as DeleteIcon } from "@mui/icons-material";
import ConfirmationDialog from "../utils/ConfirmationDialog";
import Sidebar from "./Sidebar";
import Header from "./Header";
import useLocalStorage from "../utils/useLocalStorage";
const Todolist = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name");
  
  const [idCounter, setIdCounter] = useState(0);
  const [todos, setTodos] = useLocalStorage("todos",[]);
  const [newTodo, setNewTodo] = useState("");
  const [error, setError] = useState("");
  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] =useState(false);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("localTasks")) {
      const storedList = JSON.parse(localStorage.getItem("localTasks"));

      setTodos(storedList);
      setIdCounter(storedList.length);
    }
  }, []);

  const saveTasks = (tasks) => {
    localStorage.setItem("localTasks", JSON.stringify(tasks));
  };

  const handleNewTodoChange = (e) => {
    setNewTodo(e.target.value);
    setError("");
  };

  const addTodo = () => {
    if (newTodo.trim() === "") {
      setError("Task cannot be empty");
      return;
    }
    if (
      todos.some((todo) => todo.title.toLowerCase() === newTodo.toLowerCase())
    ) {
      setError("Task already exists");
      return;
    }

    const newTask = {
      id: idCounter,
      title: newTodo,
    };

    setTodos((prevTodos) => [...prevTodos, newTask]);
    setNewTodo('');
    setError('');
    setIdCounter(idCounter + 1);
    saveTasks([...todos, newTask]);
  };
  const toggleCompletion = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
    saveTasks(updatedTodos);
  };

  const openDeleteConfirmation = (index) => {
    setDeleteConfirmationOpen(true);
    setDeleteIndex(index);
  };

  const handleDeleteConfirmation = () => {
    const updatedTodos = [...todos];
    updatedTodos.splice(deleteIndex, 1);
    setTodos(updatedTodos);
    saveTasks(updatedTodos);
    setDeleteConfirmationOpen(false);
  };

  const clearTodos = () => {
    setDeleteIndex(null);
    setIsConfirmationDialogOpen(true);
  };

  const handleClearConfirmed = () => {
    setTodos([]);
    localStorage.removeItem("localTasks");
    setIsConfirmationDialogOpen(false);
  };
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (

    <>        
    <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    <Header name={name} toggleSidebar={toggleSidebar} />

    <div className="p-10 h-screen">
  
      <h2 className="text-3xl mt-10">Create Task</h2>
      <div className="flex gap-4 mt-10">
        <TextField
          label="Add a new todo"
          sx={{ width: "350px" }}
          variant="outlined"
          value={newTodo}
          onChange={handleNewTodoChange}
        />
        <Button
          variant="contained"
          className="hover:bg-cyan-400 primary"
          startIcon={<AddCircle />}
          onClick={addTodo}
        >
          Add
        </Button>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <h4 className="text-3xl mt-10 mb-5">My Tasks</h4>
      <List>
        {todos.map((todo, index) => (
          <ListItem
            key={todo.id}
            className={`flex items-center bg-cyan-100 mt-4 shadow-md rounded max-w-screen-sm`}
          >
            <Checkbox
              onClick={() => toggleCompletion(index)}
              checked={todo.completed}
            />
            <span>{todo.title}</span>
            <div className="ml-auto">
              <IconButton onClick={() => openDeleteConfirmation(index)}>
                {" "}
                <DeleteIcon />
              </IconButton>
              <ConfirmationDialog
                open={deleteConfirmationOpen}
                onClose={() => setDeleteConfirmationOpen(false)}
                onConfirm={handleDeleteConfirmation}
                title="Confirm Deletion"
                content="Are you sure you want to delete this task?"
              />
             </div>
          </ListItem>
        ))}
      </List>
      
     <Button
        variant="contained"
        sx={{ marginTop: "20px" }}
        onClick={clearTodos}
        disabled={todos.length === 0}
      >
        Clear
      </Button>
      <ConfirmationDialog
        open={isConfirmationDialogOpen}
        onClose={() => setIsConfirmationDialogOpen(false)}
        onConfirm={handleClearConfirmed}
        title="Confirmation"
        content="Are you sure you want to clear?"
      />
    </div>
    </>
  );
}
export default Todolist;
  
