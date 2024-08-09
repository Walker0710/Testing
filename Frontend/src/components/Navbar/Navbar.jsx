import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import Logo from '../../assets/IITHL.png'

function Navbar() {
  const isAuthenticated = !!localStorage.getItem('token');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className='full-nav'>
      <div className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            {/* <img className='logo-yoo' src={Logo} alt="logo" /> */}
            <i class='fab fa-typo3' />
          </Link>

          <ul className='nav-menu'>
            <li className='nav-item'>
              <a href='/' className='nav-links'>Home</a>
            </li>
            <li className='nav-item'>
              <a href='/student' className='nav-links'>Student</a>
            </li>
            <li className='nav-item'>
              <a href='/' className='nav-links'>Team</a>
            </li>
            <li className='nav-item'>
              <a href='/blogs' className='nav-links'>Blog</a>
            </li>
            <li className='nav-item'>
              <a href='/overflows' className='nav-links'>Overflow</a>
            </li>
            {isAuthenticated ? (
              <>
                <li className='nav-item'>
                  <a href='/profile' className='nav-links'>Profile</a>
                </li>
                <li className='nav-item'>
                  <a onClick={handleLogout} className='nav-links'>Logout</a>
                </li>
              </>
            ) : (
              <>
                <li className='nav-item'>
                  <a href='/register' className='nav-links'>Register</a>
                </li>
                <li className='nav-item'>
                  <a href='/login' className='nav-links'>Login</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;



