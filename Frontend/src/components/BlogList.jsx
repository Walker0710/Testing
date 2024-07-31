import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await axios.get('/api/blogs');
      setBlogs(response.data);
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      {blogs.map(blog => (
        <div key={blog._id}>
          <h2><Link to={`/blogs/${blog._id}`}>{blog.title}</Link></h2>
          <p>{blog.content.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
