import { MdDeleteForever, MdCheckCircle } from "react-icons/md";

export const TodoList = ({ todoArr, setTodoArr }) => {
    const deleteTodo = (itemText) => {
        console.log(itemText);

        const filteredData = todoArr.filter((element) => {
            return element != itemText;
        })
        setTodoArr(filteredData);
    }
    const checkTodo = (itemText) => {

        const filteredData = todoArr.map((element) => {
            if (element.content == itemText) {
                return {
                    ...element, checked: !element.checked // Toggle checked property
                }
            } else {
                return element;
            }
        })
        setTodoArr(filteredData);
    }
    return (
        <>
            <div className="TodoList">
                <ul>
                    {
                        todoArr.map((item, index) => {
                            return (
                                <li key={index} className={item.checked ? "checked" : ""}>
                                    <span className="text">{item.content}</span>
                                    <div className="operations">
                                        <button className="check" onClick={() => checkTodo(item.content)}>
                                            <MdCheckCircle />
                                        </button>
                                        <button className="dlt" onClick={() => deleteTodo(item)}>
                                            <MdDeleteForever />
                                        </button>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}