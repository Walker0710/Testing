// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const BlogDetail = ({ match }) => {
//   const [blog, setBlog] = useState(null);
//   const [comment, setComment] = useState('');

//   useEffect(() => {
//     const fetchBlog = async () => {
//       const response = await axios.get(`http://localhost:5000/blogs/${match.params.id}`);
//       setBlog(response.data);
//     };
//     fetchBlog();
//   }, [match.params.id]);

//   const handleLike = async () => {
//     const response = await axios.post(`http://localhost:5000/blogs/${match.params.id}/like`);
//     setBlog(response.data);
//   };

//   const handleComment = async () => {
//     const response = await axios.post(`http://localhost:5000/blogs/${match.params.id}/comment`, { comment });
//     setBlog(response.data);
//     setComment('');
//   };

//   if (!blog) return <div>Loading...</div>;

//   return (
//     <div>
//       <h1>{blog.title}</h1>
//       <p>{blog.content}</p>
//       <button onClick={handleLike}>Like ({blog.likes})</button>
//       <div>
//         <h3>Comments</h3>
//         <ul>
//           {blog.comments.map((c, index) => (
//             <li key={index}>{c}</li>
//           ))}
//         </ul>
//         <input
//           type="text"
//           value={comment}
//           onChange={(e) => setComment(e.target.value)}
//         />
//         <button onClick={handleComment}>Add Comment</button>
//       </div>
//     </div>
//   );
// };

// export default BlogDetail;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams(); // Extract the route parameter
  const [blog, setBlog] = useState(null);
  const [comment, setComment] = useState('');

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await axios.get(`http://localhost:5000/blogs/${id}`);
      setBlog(response.data);
    };
    fetchBlog();
  }, [id]);

  const handleLike = async () => {
    const response = await axios.post(`http://localhost:5000/blogs/${id}/like`);
    setBlog(response.data);
  };

  const handleComment = async () => {
    const response = await axios.post(`http://localhost:5000/blogs/${id}/comment`, { comment });
    setBlog(response.data);
    setComment('');
  };

  if (!blog) return <div>Loading...</div>;

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <button onClick={handleLike}>Like ({blog.likes})</button>
      <div>
        <h3>Comments</h3>
        <ul>
          {blog.comments.map((c, index) => (
            <li key={index}>{c}</li>
          ))}
        </ul>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={handleComment}>Add Comment</button>
      </div>
    </div>
  );
};

export default BlogDetail;
