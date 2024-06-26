import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Frontend/Navigation/Navigation"
import Main from './Frontend/Main/Main';
import Posts from './Pages/posts';
import Footer from './Frontend/Footer/Footer';
import AddProject from './Frontend/Projects/AddProject';
import AddPostPage from './Pages/addPost';
import Projects from './Frontend/Projects/Projects';
import CV from './Frontend/CV/CV';
import { View } from './Frontend/View/View';
import SettingsPage from './Pages/settings';
import AddProjectPage from './Pages/addProject';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Main />} />
          <Route path="posts" element={<Posts />} />
          <Route path="projects" element={<Projects />} />
          <Route path="cv" element={<CV />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="addPost" element={<AddPostPage />} />
          <Route path="addProject" element={<AddProjectPage />} />
          <Route path="projects/view/:id" element={<View />}
        />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;