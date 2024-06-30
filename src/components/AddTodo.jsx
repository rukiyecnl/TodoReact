import { useRef, useState } from "react";
import { UseTodoValues } from "../store/context"

export const AddTodo = () => {
    const ref = useRef([]);
    const {todos, setTodos} = UseTodoValues();
    const [newTodoTitle, setNewTodoTitle] = useState("");

    const handleDeleteBtn = (todoId) => {
        const newTodos = [...todos];
        const deletedTodo = todos.find(todo => todo.id == todoId);
  
        newTodos.splice(todos.indexOf(deletedTodo),1);
        setTodos(newTodos);
    }

    const handleCompleted = (todoId) => {
        const completedTodo = todos.map( (todo) =>
            todo.id == todoId ? { ...todo, completed: !todo.completed} : todo
        )
        setTodos(completedTodo);
    }

    const handleEditBtn = (todoId, todoText) => {
        
        setNewTodoTitle(todoText);

        const updateTodos = todos.map((todo) => 
            todo.id == (todoId) ? { ...todo, todo: newTodoTitle, isEdited: !todo.isEdited } : todo
        )

        setTodos(updateTodos);
    }


    // ref={(el) => (refs.current[index] = el)} ifadesi, 
    // her bir liste öğesi (<li>) render edildiğinde çalışır.

    return (
        <ul>
            {todos.map((todo, index) => {
                return (
                    <li key={todo.id} ref={(el) => (ref.current[index] = el)}>
                        <button onClick={() => handleCompleted(todo.id)}>{todo.completed ? "✅" : "🟩"} </button>
                        {todo.isEdited 
                            ? 
                                (<div>
                                    <input value={newTodoTitle} type="text" onChange={(e) => setNewTodoTitle(e.target.value)}/>
                                </div>
                                 ) 
                            : 
                                todo.completed ? <del>{todo.todo}</del> : <p>{todo.todo}</p>}
                        
                        <button onClick={() => handleEditBtn(todo.id, todo.todo)}>🔄️</button>
                        <button onClick={() => handleDeleteBtn(todo.id)}>🗑️</button>

                        
                    </li>
                )
            })}
        </ul>
    )
}