import {Link} from 'react-router-dom';
import moment from 'moment';
import PropTypes from "prop-types";

export default function Post(props) {
const { post } = props;
  return(
    <>
      {post.map((element)=>
        <Link to={`/posts/${element.id}`} key={element.id} >
          <div className="post">
            <p className='time'>{moment(element.created).format('DD/MM/YYYY HH:mm')}</p>
            <p className="post_content">{element.content}</p> 
          </div>
        </Link>
      )}
    </>
  )

  Post.propTypes = {
    post: PropTypes.array
   };

}

