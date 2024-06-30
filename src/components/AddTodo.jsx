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
                    <li className="item" key={todo.id} ref={(el) => (ref.current[index] = el)}>
                        <div className="leftSide">
                            <button className="completedBtn" onClick={() => handleCompleted(todo.id)}>{todo.completed ? "✅" : "🟩"} </button>
                            {todo.isEdited 
                                ? 
                                    (<div>
                                        <input className="updateInput" value={newTodoTitle} type="text" onChange={(e) => setNewTodoTitle(e.target.value)}/>
                                    </div>
                                    ) 
                                : 
                                    todo.completed ? <del className="todoTitle">{todo.todo}</del> : <p className="todoTitle">{todo.todo}</p>}
                        </div>
                        <div className="editDeletebtn">
                            <button className="editBtn" onClick={() => handleEditBtn(todo.id, todo.todo)}>🔄️</button>
                            <button className="deleteBtn" onClick={() => handleDeleteBtn(todo.id)}>🗑️</button>
                        </div>
                        

                        
                    </li>
                )
            })}
        </ul>
    )
}