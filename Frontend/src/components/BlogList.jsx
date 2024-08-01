// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const BlogList = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const res = await axios.get('/api/blogs');
//         setBlogs(res.data);  // Ensure the response is an array
//       } catch (err) {
//         setError('Error fetching blogs');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <h2>Blogs</h2>
//       {blogs.length > 0 ? (
//         <ul>
//           {blogs.map(blog => (
//             <div>
//               <li key={blog._id}>
//                 <Link to={`/blogs/${blog._id}`}>{blog.title}</Link>
//                 <p>{blog.content}</p>
//               </li>
//             </div>

//           ))}
//         </ul>
//       ) : (
//         <p>No blogs available</p>
//       )}
//     </div>
//   );
// };

// export default BlogList;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/blogs');
        setBlogs(res.data);
        console.log(typeof(blogs));
        console.log(blogs);
      } catch (err) {
        setError('Error fetching blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Blogs</h2>
      {blogs.length > 0 ? (
        <ul>
          {blogs.map(blog => (
            <div key={blog._id}>
              <h2>
                <Link to={`/blogs/${blog._id}`}>{blog.title}</Link>
              </h2>
              <p>{blog.content}</p>
            </div>

          ))}
        </ul>
      ) : (
        <p>No blogs available</p>
      )}
    </div>
  );
};

export default BlogList;