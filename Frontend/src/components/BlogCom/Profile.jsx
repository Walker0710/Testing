import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css'

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await axios.get('http://localhost:5000/api/auth/profile', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setUser(response.data);
    };

    fetchProfile();
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className='profile-all'>

      <h1 className='profile-username'>Username : {user.username}</h1>
      <p className='profile-email'>Email : {user.email}</p>
    </div>
  );
}

export default Profile;
