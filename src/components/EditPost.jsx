import { Link } from "react-router-dom";
import axios from 'axios';
import moment from 'moment';

export default function EditPost(props) {

  const onClick = () =>{
    try {
      axios.delete(`http://localhost:7070/posts/${props.post.post.id}`)
      .then(() => console.log('Delete successful'));
    } catch (error) {
    console.error('Delete failed', error);
    }
  }

  const handleClose = () => {
    return;
  };



  return (
    <>
      <div className="card">
        <div className="content">
        <p className='time'>{moment(props.post.post.created).format('DD/MM/YYYY HH:mm')}
        </p>
          <p>{props.post.post.content}</p>
        </div>
        <div className="button-container">
          <Link to="/"><button className="btn" onClick={onClick}>Удалить</button></Link>
          <Link to={`edit`}> <button className="btn">Редактировать</button></Link>
        </div>
        <Link to="/posts" onClick={handleClose}>
          <button className='close' onClick={(event) =>{handleClose(event)} }>&#10006;</button>
        </Link>
      </div>
    </>
  );

 

}
