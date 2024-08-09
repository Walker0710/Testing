import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CommentForm from '../BlogCom/CommentForm';
import './OverflowDetail.css'

function OverflowDetail() {
  const { id } = useParams();
  const [overflow, setOverflow] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchOverflow = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/overflows/${id}`);
        setOverflow(response.data);
        setComments(response.data.comments || []);
      } catch (error) {
        console.error('Error fetching the overflow:', error);
      }
    };

    fetchOverflow();
  }, [id]);

  const handleCommentSubmit = async (comment) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        `http://localhost:5000/api/overflows/${id}/comments`,
        { comment },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setComments([...comments, response.data.comment]);
    } catch (error) {
      console.error('Error adding the comment:', error);
    }
  };

  if (!overflow) return <div>Loading...</div>;

  return (
    <div className='overflow-detail-all'>
      <h1 className='overflow-detail-heading'>{overflow.title}</h1>
      <p className='overflow-detail-content'>{overflow.content}</p>
      <h2 className='overflow-detail-comment-heading'>Replies</h2>
      <div className='overflow-detail-comment-list'>
        {comments.map((comment, index) => (
          <div className='overflow-detail-comment-content' key={index}>
            <strong>{comment?.username || 'Anonymous'}:</strong> {comment?.text || 'No text provided'}
          </div>
        ))}
      </div>
      <CommentForm onSubmit={handleCommentSubmit} />
    </div>
  );
}

export default OverflowDetail;
