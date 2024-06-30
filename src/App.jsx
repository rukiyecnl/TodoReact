import { useEffect, useState } from 'react'
import { UseTodoValues } from './store/context';
import { InputValue } from './components/InputValue';
import { AddTodo } from './components/AddTodo';
import { Header } from './components/Header';
import './App.css'

function App() {
  const {todos} = UseTodoValues();

  useEffect(() => {
    console.log(todos);
  }, [todos])

  return (
    
    <div className="container">
      <Header />
      <InputValue />
      <AddTodo />
    </div>
    
  )
}

export default App
