import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import EditPost from './EditPost';

export default function PostView() {

  const {id} = useParams();

  const initialState = {
    post:{
      content: '',
      id: id,
      created: 0
    }
  }

  const [onePost,setOnePost] = useState(initialState)

  useEffect(()=>{
    fetch(`http://localhost:7070/posts/${id}`)
      .then((response)=>response.json())
      .then((data)=>setOnePost((data === undefined? initialState : data)))
      .catch(error=>{
        console.error(error)
      });
  },[id])

  return(
    <>
      <EditPost post={onePost} id={id} setOnePost={setOnePost} initialState={initialState}/>
    </>
  )
}
