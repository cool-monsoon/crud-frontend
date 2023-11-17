import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function NewPost() {

  const [text, setText] = useState('');

  const handleChange = event => {
    const text = event.target.value;
    setText(text);
  };

  const handleClick = () => {
    const newCard = {id: 0, content: text};
    axios.post("http://localhost:7070/posts", newCard);
  };

  const handleClose = () => {
    return
  };

  return (
   <div className="card">
      <textarea rows="6" cols="50" onChange={handleChange} />
      <div className="button-container">
      <Link to="/posts" onClick={handleClick}>
        <button className="btn">Опубликовать</button>
      </Link>
      </div>
      <Link to="/posts" onClick={handleClose}>
        <button className='close' onClick={(event) =>{handleClose(event)} }>&#10006;</button>
      </Link>
    </div>
  )
}


