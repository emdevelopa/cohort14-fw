import { useState } from "react"
import type { Task } from "../components/Todo";

export const useHandleTodoUpdate = () =>{
    const [inputValue, setInputValue] = useState("");
    const [editId, setEditId] = useState<number | null>(null);

    const handleEditBtnClick = (todoId:number, todoText: string)=>{
        setEditId(todoId);
        setInputValue(todoText);
    };

    const handleUpdate = (tasks:Task[], setTasks: (task:Task[])=> void) => {
        if(editId !== null && inputValue.trim() !==""){
            const updatedTasks = tasks.map((task)=>task.id === editId ? {...task, text:inputValue}:task);
            setTasks(updatedTasks);
            resetUpdate();
        }
    };

    const resetUpdate = () =>{
        setEditId(null);
        setInputValue("");
    };

    const isEditing = editId !== null;

    return{
        inputValue,
        setInputValue,
        editId,
        handleEditBtnClick,
        handleUpdate,
        resetUpdate,
        isEditing
    };
};