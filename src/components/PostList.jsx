import { useEffect, useState } from "react"
import Post from "./Post"
import NewPostButton from "./NewPostButton"
import { Routes, Route } from "react-router-dom"


export default function PostList() {

  const [post,setPost] = useState()
  const getPost = () =>{
    fetch('http://localhost:7070/posts')
      .then((response)=>response.json())
      .then((data)=>setPost(data))
      .catch(error=>{
        console.error(error)
     });
  }

  useEffect(getPost,[])

  return (
    <>
      <NewPostButton/>
        <div className="posts-container">
          <Routes>
            <Route path="/posts" element={<Post post = {post} />}/>
          </Routes>
        </div>
    </>
  )
}
