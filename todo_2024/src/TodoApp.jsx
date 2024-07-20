import "./TodoApp.css";
import { DateTime } from './DateTime';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { DeleteAll } from './DeleteAll';
import { useState } from "react"

export const TodoApp = () => {
    const [inputVal, setInputVal] = useState("");
    const [todoArr, setTodoArr] = useState([]);



    return (
        <>
            <div className="todoWrap">
                <div className="header">
                    <h1>Todo List</h1>
                </div>
                <DateTime />
                <TodoForm inputVal={inputVal} setInputVal={setInputVal} todoArr={todoArr} setTodoArr={setTodoArr} />
                <TodoList todoArr={todoArr} setTodoArr={setTodoArr} />
                <DeleteAll setTodoArr={setTodoArr} />
            </div>
        </>
    )
}