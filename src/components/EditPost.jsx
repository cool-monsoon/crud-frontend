import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from 'axios';
import moment from 'moment';

export default function EditPost(props) {

  const { post } = props;

  const onClick = () =>{
    try {
      axios.delete(`http://localhost:7070/posts/${post.id}`)
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
        <p className='time'>{moment(post.created).format('DD/MM/YYYY HH:mm')}
        </p>
          <p>{post.content}</p>
        </div>
        <div className="button-container">
          <Link to="/posts"><button className="btn" onClick={onClick}>Удалить</button></Link>
          <Link to={`edit`}> <button className="btn">Редактировать</button></Link>
        </div>
        <Link to="/posts" onClick={handleClose}>
          <button className='close' onClick={(event) =>{handleClose(event)} }>&#10006;</button>
        </Link>
      </div>
    </>
  );

  EditPost.propTypes = {
    post: PropTypes.object,
    id: PropTypes.number,
    content: PropTypes.string,
    created: PropTypes.any
  };

}
