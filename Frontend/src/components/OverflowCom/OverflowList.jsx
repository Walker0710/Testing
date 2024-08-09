import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './OverflowList.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

const OverflowList = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-out',
      delay: 100,
      once: true,
    });
  }, []);

  const [overflows, setOverflows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOverflows = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/overflows');
        setOverflows(res.data);
        console.log(typeof (overflows));
        console.log(overflows);
      } catch (err) {
        setError('Error fetching overflows');
      } finally {
        setLoading(false);
      }
    };

    fetchOverflows();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  let forCSS = 1;

  return (
    <div className='overflow-list-all' data-aos="fade-up">
      <h2 className='overflow-list-heading overflow-list-heading-first' data-aos="fade-up">Ask questions, get answers, clear doubts</h2>
      <h2 className='overflow-list-heading overflow-list-heading-last' data-aos="fade-up">and learn with confidence</h2>
      <div className='overflow-card-container' data-aos="fade-up">
            {overflows.map((overflow, index) => {
              const className = forCSS === 1 ? 'overflow-card-first' : 'kuch-nhi';
              if (forCSS === 1) forCSS = -1;
              return (
                <div className={`overflow-card ${className}`} key={overflow._id} data-aos="fade-up">
                  <h2 className='overflow-card-heading' data-aos="fade-up">
                    <Link to={`/overflows/${overflow._id}`}>{overflow.title}</Link>
                  </h2>
                  <div className='overflow-card-auth-date' data-aos="fade-up">
                    <p>{overflow.author} / {overflow.createdAt}</p>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default OverflowList;
