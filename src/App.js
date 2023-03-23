import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import SinglePost from "./pages/single-post";

import Home from './pages/home'
import Blog from './pages/blogs'
import Category from './pages/category'
import Error404 from './pages/404'
import Json from "./components/json";
import SingleCategory from "./pages/single-category";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const App = () =>{
return <Router>
 <Routes>
   <Route exact path="/" element={<Home title={'Home | ReactBlog'} />} />
   <Route exact path="/blogs" element={<Blog title={'Blogs | ReactBlog'}/>} />
   <Route exact path="/category" element={<Category title={'Category | ReactBlog'}/>} />
   <Route exact path="/blog/:id" element={<SinglePost />} />
   <Route exact path="json" element={<Json/>} />
   <Route path="*" element={<Error404 title={'404 Error not found'} />} />
   <Route exact path="/category/:id" element={<SingleCategory />} />
 </Routes>
</Router>
};

export default App