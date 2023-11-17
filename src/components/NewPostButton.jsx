import {Link} from 'react-router-dom';


export default function NewPostButton () {
  return(
    <div className="create-button-container">
      <Link to='/posts/new'> <button className="create-btn">Написать</button></Link>
    </div>
  )
}

