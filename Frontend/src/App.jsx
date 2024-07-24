import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogDetail from './Com/BlogDetail';
import BlogList from './Com/BlogList';
import NewBlog from './Com/NewBlog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={<BlogList/>} />
        <Route path="/blogs/:id" component={<BlogDetail/>} />
        <Route path="/new" component={<NewBlog/>} />
      </Routes>
    </Router>
  );
}

export default App;
