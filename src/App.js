import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Frontend/Navigation/Navigation"
import CV from './Pages/cv';
import Main from './Pages/main';
import Posts from './Pages/posts';
import Projects from './Pages/projects';
import Footer from './Frontend/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Main />} />
          <Route path="posts" element={<Posts />} />
          <Route path="projects" element={<Projects />} />
          <Route path="cv" element={<CV />} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;