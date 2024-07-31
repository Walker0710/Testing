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
      const response = await axios.get(`/api/blogs/${id}`);
      setBlog(response.data);
      setComments(response.data.comments);
    };

    fetchBlog();
  }, [id]);

  const handleCommentSubmit = async (comment) => {
    const response = await axios.post(`/api/blogs/${id}/comments`, { comment });
    setComments([...comments, response.data]);
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
            <strong>{comment.username}:</strong> {comment.text}
          </div>
        ))}
      </div>
      <CommentForm onSubmit={handleCommentSubmit} />
    </div>
  );
}

export default BlogDetail;
