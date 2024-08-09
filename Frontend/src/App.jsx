import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import Student from './Pages/Student/Student';
import BlogDetail from './components/BlogCom/BlogDetail';
import NewBlog from './components/BlogCom/NewBlog';
import Blog from './Pages/Blog/Blog';
import UserProfile from './Pages/UserProfile/UserProfile';
import Login from './components/BlogCom/Login';
import Register from './components/BlogCom/Register';
import NewOverflow from './components/OverflowCom/NewOverflow';
import OverflowDetail from './components/OverflowCom/OverflowDetail';
import Overflow from './Pages/Overflow/Overflow'

import './App.css';

function AppContent() {
  const location = useLocation();
  const hideNavbarAndFooter = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      {!hideNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/student' exact element={<Student />} />
        <Route path='/blogs' exact element={<Blog />} />
        <Route path='/blogs/:id' exact element={<BlogDetail />} />
        <Route path='/blogs/new' exact element={<NewBlog />} />
        <Route path='/overflows' exact element={<Overflow />} />
        <Route path='/overflows/:id' exact element={<OverflowDetail />} />
        <Route path='/overflows/new' exact element={<NewOverflow />} />
        <Route path='/profile' exact element={<UserProfile />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/register' exact element={<Register />} />
      </Routes>
      {!hideNavbarAndFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
