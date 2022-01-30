import React, {useState} from 'react';
import CreateNote from "./CreateNote";
import Note from "./Note";

const MainNote = () => {

const [allItems, setAllItems] = useState([]);

const addNoteFun = (inputValues) => {
    let {title, content} = inputValues;
    if((title !== "") && (content !== "")){
        setAllItems((oldData) => {
            return [
                ...oldData,
                inputValues
            ]
        })
    }
}

const deleteNote = (id) => {
    setAllItems((oldData) => {
        return oldData.filter((currVal, index) => {
            return index !== id;
        })
    })
}
    
  return(
      <section>
          <div className='container'>
            <div className='inner'>
                <div className='create-note'>
                    <CreateNote addNoteFunPass={addNoteFun}/>
                </div>
                <div className='notes-wrap'>
                    <ul>
                    {
                        allItems.map((currVal, index)=>{
                            return (
                                <Note key={index} id={index} title={currVal.title} content={currVal.content} ondelete={deleteNote}/>                            
                            )
                        })
                    }
                    </ul>
                </div>
            </div>
          </div>
      </section>
  )
}

export default MainNote;