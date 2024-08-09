import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './BlogList.css';
import AOS from 'aos';
import 'aos/dist/aos.css'

const BlogList = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-out',
      delay: 100,
      once: true,
    });
  }, []);

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/blogs');
        setBlogs(res.data);
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
    <div className='blog-list-all' data-aos="fade-up">
      <h2 className='blog-list-heading blog-list-heading-first' data-aos="fade-up">Explore the latest news, research, and opinions</h2>
      <h2 className='blog-list-heading' data-aos="fade-up">on a variety of topics like</h2>
      <h2 className='blog-list-heading blog-list-heading-last' data-aos="fade-up">technology, overall devlopment.</h2>
      <div className='blog-card-container' data-aos="fade-up">
        {blogs.map(blog => (
          <div className='blog-card' key={blog._id} data-aos="fade-up">
            <img className='blog-card-img' src={blog.img} alt="blogImg" />
            <h2 className='blog-card-heading' data-aos="fade-up">
              <Link to={`/blogs/${blog._id}`}>{blog.title}</Link>
            </h2>
            <div className='blog-card-auth-date' data-aos="fade-up">
              <p className='blog-card-auth-date-content'>{blog.author} / {blog.createdAt}</p>
              {/* <p>{blog.createdAt}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;



