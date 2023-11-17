import { Routes, Route } from "react-router-dom";
import "./App.css";
import PostList from './components/PostList'
import NewPost from './components/NewPost'
import PostView from './components/PostView'
import EditPost from './components/EditPost'


export default function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='*' element={<PostList/>}/>
        <Route path='posts/' element={<PostList/>}/>
        <Route path='posts/new' element={<NewPost/>}/>
        <Route path='posts/:id' element={<PostView/>}/>
        <Route path='posts/:id/edit' element={<EditPost/>}/>
      </Routes>
    </div>
  );
}
