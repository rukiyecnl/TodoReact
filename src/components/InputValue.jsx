import { useState } from "react";
import { UseTodoValues } from "../store/context";

export const InputValue = () => {
    const {todos, setTodos} = UseTodoValues();
    const [inputValue, setInputValue] = useState("");

    let i = 1;
    const changeId = () => {
      todos.forEach(todo => {
        if (todo.id == i) {
          i++;
        }
      });
      return i;
    }
    
    const handleForm = (e) => {
      e.preventDefault()
      const formData = new FormData(e.target);
      const formObj = Object.fromEntries(formData);
      const newTodo = {
        id: changeId(),
        todo: formObj.todo,
        isEdited: false,
        completed: false,
      } ;
      
      setTodos([...todos, newTodo]);
      setInputValue(" ");
      
    }
  
    return (
      <>
      <form onSubmit={(e) => handleForm(e)}>
        <input type="text" name='todo' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <button type='submit' className='addBtn' >EKLE</button>
      </form>
      </>
    )
}