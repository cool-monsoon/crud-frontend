import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function NewPost() {

  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleChange = event => {
    const text = event.target.value;
    setText(text);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCard = {id: 0, content: text};
    axios.post("http://localhost:7070/posts", newCard);
    navigate('/posts');
  };

  const handleClose = () => {
    return
  };

  return (
   <div className="card">
    <form onSubmit={handleSubmit}>
      <textarea rows="6" cols="50" onChange={handleChange} />
      <div className="button-container">
        <button type="submit" className="btn">Опубликовать</button>
      </div>
    </form>

    <Link to="/posts" onClick={handleClose}>
      <button className='close' onClick={(event) =>{handleClose(event)} }>&#10006;</button>
    </Link>
    </div>
  )
}


