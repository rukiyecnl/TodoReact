import { useEffect, useState } from 'react'
import { UseTodoValues } from './store/context';
import { InputValue } from './components/InputValue';
import { AddTodo } from './components/AddTodo';
// import './App.css'

function App() {
  const {todos, setTodos} = UseTodoValues();

  useEffect(() => {
    console.log(todos);
  }, [todos])

  return (
    <>
      <InputValue />
      <AddTodo />
    </>
  )
}

export default App
