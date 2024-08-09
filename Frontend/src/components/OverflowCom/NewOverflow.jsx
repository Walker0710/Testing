import React, { useState } from 'react';
import axios from 'axios';
import './NewOverflow.css';

const NewOverflow = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const token = localStorage.getItem('token');

    try {
      await axios.post('http://localhost:5000/api/overflows', 
        { title, content }, 
        { headers: { Authorization: `Bearer ${token}` } }
      );
      window.location.href = '/';
    } catch (error) {
      console.error('There was an error creating the overflow:', error);
      alert('Failed to create overflow. Please make sure you are logged in.');
    }
  };

  return (
    <div className='new-overflow-all'>
      <h1 className='new-overflow-heading'>New Overflow</h1>
      <form className='new-overflow-form' onSubmit={handleSubmit}>
        <div className='new-overflow-com'>
          <label className='new-overflow-form-title'>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className='new-overflow-com'>
          <label className='new-overflow-form-content'>Content</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewOverflow;
