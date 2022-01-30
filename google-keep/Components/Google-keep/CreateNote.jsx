import React, {useState} from 'react';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';

const CreateNote = (props) => {

  const [inputValues, setInputVal] = useState({
    title: "",
    content: ""
  });
  
  const inputFun = (event) => {
    let {name, value} = event.target;
    setInputVal((prevData) => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }



  const addItem = (event) => {
    event.preventDefault();
    props.addNoteFunPass(inputValues);
    setInputVal((prevData)=>{
      const {title, content} = prevData;
      if((title != "") && (content != "")){
        return {
          title: "",
          content: ""
        }
      }else{
        return {
        ...prevData
        }
      }
    })
  }
  

  return(
    <div>
      <form onSubmit={addItem}>
        <div className='input-wrap'>
          <input type="text" placeholder='Title' name="title" onChange={inputFun} value={inputValues.title}/>
        </div>
        <div className='input-wrap'>
          <textarea placeholder='Your Note...' name="content" onChange={inputFun} value={inputValues.content}></textarea>
        </div>
        <div className='input-wrap'>
          <Button type="submit" className='addNote'> <AddBoxIcon/> </Button>
        </div>
      </form>
    </div>
  )
}

export default CreateNote;