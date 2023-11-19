import {Link} from 'react-router-dom';
import moment from 'moment';

export default function Post ({post}) {
  return(
  <>
    {post?.map((element)=>
      <Link to={`/posts/${element.id}`} key={element.id} >
        <div className="post">
          <p className='time'>{moment(element.created).format('DD/MM/YYYY HH:mm')}</p>
          <p className="post_content">{element.content}</p> 
        </div>
      </Link>
    )}
  </>
)

}

