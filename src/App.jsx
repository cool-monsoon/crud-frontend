import { Routes, Route } from "react-router-dom";
import "./App.css";
import PostList from './components/PostList'
import NewPost from './components/NewPost'
import PostView from './components/PostView'
import PostEditing from './components/PostEditing'


export default function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='*' element={<PostList/>}/>
        <Route path='posts/' element={<PostList/>}/>
        <Route path='posts/new' element={<NewPost/>}/>
        <Route path='posts/:id' element={<PostView/>}/>
        <Route path='posts/:id/edit' element={<PostEditing/>}/>
      </Routes>
    </div>
  );
}