import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CommentForm from './CommentForm';

function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/blogs/${id}`);
        setBlog(response.data);
        setComments(response.data.comments || []);
      } catch (error) {
        console.error('Error fetching the blog:', error);
      }
    };

    fetchBlog();
  }, [id]);

  const handleCommentSubmit = async (comment) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        `http://localhost:5000/api/blogs/${id}/comments`,
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

  if (!blog) return <div>Loading...</div>;

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <h3>Comments</h3>
      <div>
        {comments.map((comment, index) => (
          <div key={index}>
            <strong>{comment?.username || 'Anonymous'}:</strong> {comment?.text || 'No text provided'}
          </div>
        ))}
      </div>
      <CommentForm onSubmit={handleCommentSubmit} />
    </div>
  );
}

export default BlogDetail;
