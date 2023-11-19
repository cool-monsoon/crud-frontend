import { useEffect, useState } from "react"
import Post from "./Post"
import NewPostButton from "./NewPostButton"
import { Routes, Route } from "react-router-dom"
import axios from "axios";

export default function PostList() {

  const [post, setPost] = useState([])
  const getPosts = () => {
    const response = axios.get("http://localhost:7070/posts");
    const data = response.data;
    setPost(data);

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
