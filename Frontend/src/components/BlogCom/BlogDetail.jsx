import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CommentForm from './CommentForm';
import './BlogDetail.css'

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

  const splitParagraph = (text) => {
    const len = text.length;
    const partLen = Math.ceil(len / 3);
    
    const findSplitPoint = (str, start) => {
      let spaceIndex = str.lastIndexOf(' ', start);
      if (spaceIndex === -1) return start; 
      return spaceIndex;
    };

    const split1 = findSplitPoint(text, partLen);
    const split2 = findSplitPoint(text, split1 + partLen);

    const part1 = text.slice(0, split1).trim();
    const part2 = text.slice(split1, split2).trim();
    const part3 = text.slice(split2).trim();
    
    return [part1, part2, part3];
  };

  const paragraphs = splitParagraph(blog.content);

  return (
    <div className='blog-detail-all'>
      <h1 className='blog-detail-heading'>{blog.title}</h1>
      <p className='blog-detail-time'>{blog.createdAt}</p>
      {/* <img className='blog-detail-img' src={blog.img} alt="detailImg" /> */}
      {/* {paragraphs.map((para, index) => (
        <p className='blog-detail-content' key={index}>{para}</p>
      ))} */}
      
      {paragraphs.slice(0, 1).map((para, index) => (
        <p className='blog-detail-content' key={index}>{para}</p>
      ))}
      <img className='blog-detail-img' src={blog.img} alt="detailImg" />
      {paragraphs.slice(1).map((para, index) => (
        <p className='blog-detail-content' key={index + 1}>{para}</p>
      ))}

      <h2 className='blog-detail-comment-heading'>Replies</h2>
      <div className='blog-detail-comment-list'>
        {comments.map((comment, index) => (
          <div className='blog-detail-comment-content' key={index}>
            <strong>{comment?.username || 'Anonymous'}:</strong> {comment?.text || 'No text provided'}
          </div>
        ))}
      </div>
      <CommentForm onSubmit={handleCommentSubmit} />
    </div>
  );
}

export default BlogDetail;
