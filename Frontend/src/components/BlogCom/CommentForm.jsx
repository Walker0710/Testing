import React, { useState } from 'react';
import './CommentForm.css'

function CommentForm({ onSubmit }) {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ text: comment });
    setComment('');
  };

  return (
    <form className='comment-form-all' onSubmit={handleSubmit}>
      <h2 className='comment-form-heading'>Leave a reply</h2>
      <input
        className='comment-form-input'
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        // placeholder="Add a comment"
      />
      <button className='comment-form-button' type="submit">Submit</button>
    </form>
  );
}

export default CommentForm;
