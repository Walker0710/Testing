// src/pages/BlogPage.js
import React from 'react';
import BlogDetail from '../components/BlogDetail';

function BlogPage() {
  return (
    <div>
      <BlogDetail />
    </div>
  );
}

export default BlogPage;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const BlogPage = () => {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);
//   const [comment, setComment] = useState('');
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         const res = await axios.get(`/api/blogs/${id}`);
//         setBlog(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchBlog();
//   }, [id]);

//   const handleCommentSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem('token');
//       const res = await axios.post(`/api/blogs/${id}/comments`, { comment }, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       setBlog(res.data.blog);
//       setComment('');
//     } catch (err) {
//       console.error(err);
//       setError('Failed to add comment');
//     }
//   };

//   if (!blog) return <p>Loading...</p>;

//   return (
//     <div>
//       <h2>{blog.title}</h2>
//       <p>{blog.content}</p>

//       <h3>Comments</h3>
//       <ul>
//         {blog.comments.map((comment) => (
//           <li key={comment._id}>
//             <p><strong>{comment.username}</strong>: {comment.text}</p>
//           </li>
//         ))}
//       </ul>

//       <form onSubmit={handleCommentSubmit}>
//         <div>
//           <label>Comment:</label>
//           <textarea
//             value={comment}
//             onChange={(e) => setComment(e.target.value)}
//             required
//           ></textarea>
//         </div>
//         {error && <p>{error}</p>}
//         <button type="submit">Add Comment</button>
//       </form>
//     </div>
//   );
// };

// export default BlogPage;
