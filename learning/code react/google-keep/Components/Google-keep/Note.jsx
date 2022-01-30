import React from 'react';
import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Note = (props) => {

  const deleteFun = () => {
    props.ondelete(props.id); 
  }

  return(
    <li>
      <div className='box'>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        <Button className='delete-note' onClick={deleteFun}>
          <DeleteForeverIcon/>
        </Button>
      </div>
    </li>
  )
}

export default Note;