import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Frontend/Navigation/Navigation"
import Main from './Pages/main';
import Posts from './Pages/posts';
import Footer from './Frontend/Footer/Footer';
import AddProject from './Frontend/Projects/AddProject';
import AddPostPage from './Pages/addPost';
import Projects from './Frontend/Projects/Projects';
import CV from './Frontend/CV/CV';
import { View } from './Frontend/View/View';
import Settings from './Frontend/Settings/Settings'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Main />} />
          <Route path="posts" element={<Posts />} />
          <Route path="projects" element={<Projects />} />
          <Route path="cv" element={<CV />} />
          <Route path="settings" element={<Settings />} />
          <Route path="addPost" element={<AddPostPage />} />
          <Route path="addProject" element={<AddProject />} />
          <Route path="projects/view/:id" element={<View/>}
        />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;