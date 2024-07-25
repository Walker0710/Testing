import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogDetail from './Com/BlogDetail';
import BlogList from './Com/BlogList';
import NewBlog from './Com/NewBlog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogList/>} />
        <Route path="/blogs/:id" element={<BlogDetail/>} />
        <Route path="/new" element={<NewBlog/>} />
      </Routes>
    </Router>
  );
}

export default App;
