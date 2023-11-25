import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import axios from 'axios';

export default function PostEditing() {

  const currentPage = window.location.toString();
  const previousPage = currentPage.substring(0, currentPage.length - 5);

  const {id} = useParams();
  const [text, setText] = useState({content: ''});

  console.log('initial', text);

  useEffect(()=>{
    fetch(`http://localhost:7070/posts/${id}`)
    .then(response =>response.json())
    .then((data)=>setText(data))
    .catch(error=>{
        console.error(error)
    });
},[id])


  const handleChange = event => {
    const newText = event.target.value;
    setText(newText);
  };

  console.log(text);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id > 0){
      axios.put(`http://localhost:7070/posts/${id}`, {id: id, content: text})
      .then(function(response) {
        if (response) {
          return response;
        }
        throw new Error('No response');
    })
      .catch(error => {
        console.error('Ошибка:', error);
        });
      setText({content: text});
    }
  }

  const handleClick = () => {
  window.location.assign(previousPage);
  }

  return (
    <div className="card">
      <form className="edit-card" onSubmit={handleSubmit}>
        <h3>Редактировать публикацию</h3>
        <textarea rows="6" cols="50" value={text.content} onChange={handleChange}/>
        <div className="button-container">
          <button type="submit" className="btn" onSubmit={handleSubmit}>Сохранить</button>
         </div>
      </form>
      <button className='close' onClick={(event)=>{handleClick(event)} }>&#10006;</button>
    </div>
  );
}





