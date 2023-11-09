import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
    const handleSignInAgain = () => {
    navigate("/"); 
  }
  return (
    <div className="h-screen flex flex-col items-center justify-center p-28">
       <p className="text-5xl font-serif mb-5 ">Logged out </p>
       <p className="font-serif mb-3 ">Thanks for using Todo App </p>
        <Button  variant="contained" onClick={handleSignInAgain}> Sign in Again</Button>
    </div>
  )
}

export default Logout