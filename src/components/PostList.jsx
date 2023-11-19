import { useEffect, useState } from "react"
import Post from "./Post"
import NewPostButton from "./NewPostButton"


export default function PostList() {

  const [post, setPost] = useState([])
  const getPosts = () => {
    fetch('http://localhost:7070/posts')
    .then((response)=>response.json())
    .then((data)=>setPost(data))
    .catch(error=>{
        console.error(error)
    });
  }

  useEffect(getPosts,[])

  return (
    <>
      <NewPostButton/>
      <div className="posts-container">
        <Post post = {post} />
      </div>
    </>
  )
}
