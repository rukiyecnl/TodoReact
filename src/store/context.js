import { createContext, useContext } from "react";

export const UseTodo = createContext();

export function UseTodoValues(){
    return useContext(UseTodo);
}