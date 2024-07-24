import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await axios.get('http://localhost:5000/blogs');
      setBlogs(response.data);
    };
    fetchBlogs();
  }, []);

  return (
    <div>
      <h1>Blog List</h1>
      {blogs.map(blog => (
        <div key={blog._id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <button onClick={() => window.location.href = `/blogs/${blog._id}`}>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
