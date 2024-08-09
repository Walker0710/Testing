import React, { useState } from 'react';
import axios from 'axios';
import './NewBlog.css'

const NewBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const token = localStorage.getItem('token');

    try {
      await axios.post('http://localhost:5000/api/blogs', 
        { title, content }, 
        { headers: { Authorization: `Bearer ${token}` } }
      );
      window.location.href = '/';
    } catch (error) {
      console.error('There was an error creating the blog:', error);
      alert('Failed to create blog. Please make sure you are logged in.');
    }
  };

  return (
    <div className='new-blog-all'>
      <h1 className='new-blog-heading'>New Blog</h1>
      <form className='new-blog-form' onSubmit={handleSubmit}>
        <div className='new-blog-com'>
          <label className='new-blog-form-title'>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className='new-blog-com'>
          <label className='new-blog-form-content'>Content</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewBlog;
