
import { useEffect, useState } from "react";
export const TodoForm = ({ inputVal, setInputVal, todoArr, setTodoArr }) => {

    const LsKey = "todoDataLs";
    // get from Local storage 
    useEffect(() => {
        const rawTodo = localStorage.getItem(LsKey);
        if (rawTodo) {
            setTodoArr(JSON.parse(rawTodo));
        }
    }, []);

    const addTodo = (e) => {
        e.preventDefault();
        if (!inputVal) return;
        // if (todoArr.includes(inputVal)) return;

        const isExistInArr = todoArr.find(element => {
            return element.content == inputVal;
        });

        if (isExistInArr) return;

        // Add new todo item to todoArr
        const newTodo = {
            id: new Date().getTime(),
            content: inputVal,
            checked: false
        };

        setTodoArr(prevData => [...prevData, newTodo]);
        setInputVal(""); // Clear inputVal after adding todo

        // Update local storage with updated todoArr
        localStorage.setItem(LsKey, JSON.stringify([...todoArr, newTodo]));
    }
    // To Set data on LS
    useEffect(() => {
        window.localStorage.setItem(LsKey, JSON.stringify(todoArr));
    }, [todoArr]);
    const onChangeFun = (value) => {
        setInputVal(value);
    }
    return (
        <>
            <div className="todoForm">
                <form onSubmit={addTodo}>
                    <div className="fieldsWrap">
                        <div className="inputWrap">
                            <input type="text" value={inputVal} onChange={(e) => onChangeFun(e.target.value)} />
                        </div>
                        <div className="submitWrap">
                            <input type="submit" value="Save" />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}