import React, {useState, useEffect} from 'react';
import "./Todo_style.css";

const TodoApp = () => {
  

    // get data from LS
    const getFromLs = () => {
        let getAllDataFromLs = localStorage.getItem("allItems");
        return getAllDataFromLs ?  JSON.parse(getAllDataFromLs) : [];
    }

    const [inputVal, setInputVal] = useState("");
    const [toggleAdd, setToggleAdd] = useState(false);
    const [allItems, setAllItems] = useState(getFromLs());
    const [isEdit, setIsEdit] = useState(null);

    // To Set data on LS
    useEffect(()=>{
        localStorage.setItem("allItems", JSON.stringify(allItems));
    }, [allItems]);

    const inputChangeFun = (event) => {
        setInputVal(event.target.value);
    }

    const addItem = () => {
        if(!inputVal){
            alert("Please enter something");
        }else if(inputVal && toggleAdd === true){
            debugger
            setAllItems(
                allItems.map((element)=>{
                    if(element.dataId == isEdit){
                        return{
                            ...element,
                            data: inputVal
                        }
                    }
                    return element;
                })
            )
            setInputVal("");
            setIsEdit(null);
            setToggleAdd(false);
        }else{
            const allInputData = {dataId: new Date().valueOf(), data: inputVal}
            setAllItems([...allItems, allInputData]);
            setInputVal("");
        }
    }

    const editItem = (id) => {
        const editedItemData = allItems.find((element)=>{
            return id === element.dataId
        })
        setIsEdit(id);
        setInputVal(editedItemData.data);
        setToggleAdd(true);
    }

    const deleteItem = (id) => {
        const afterDeleted = allItems.filter((element) => {
            return id !== element.dataId;
        })
        setAllItems(afterDeleted);
    }

  return (
      <>
        <section>
            <div className="todo_app">
                <div className="inner">
                    <div className="form_wrap">
                        <div className="input_wrap">
                            <input type="text" placeholder='Add Item' onChange={inputChangeFun} value={inputVal}/>
                            {
                                toggleAdd ? <i className="fas fa-edit" onClick={addItem}></i> :  <i className="fas fa-plus-square" onClick={addItem}></i>
                            }
                        </div>
                    </div>

                    <div className="list_data">
                        <ul>
                        {
                            allItems.map((element) => {
                               return( <li key={element.dataId}>
                                    <span className="data">{element.data}</span>
                                    <div className="todobtn">
                                        <i className="fas fa-edit" onClick={()=>{editItem(element.dataId)}}></i>
                                        <i className="fas fa-trash-alt" onClick={()=>{deleteItem(element.dataId)}}></i>
                                    </div>
                                </li> 
                               )                               
                            })
                        }
                        
                        </ul>
                    </div>
                </div>
            </div>
        </section>
      </>
  )
};

export default TodoApp;
