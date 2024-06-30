import { useState } from "react";
import { UseTodo } from "./context"

export const TodoProvider = ({children}) => {
    const [todos, setTodos] = useState([{
        id:1,
        todo: "Örnek Todo",
        isEdited: false,
        completed: false,
    }]);

    return <UseTodo.Provider value={{todos, setTodos}}>{children}</UseTodo.Provider>
}