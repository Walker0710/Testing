import React from 'react';
import './Footer.css';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <h3 className='footer-subscription-heading'>
          Want to be a part of the team apply for the Internship Program
        </h3>
        <p className='footer-subscription-text'>
          To gain hands-on experience
        </p>
            <Button buttonStyle='btn--outline'>Apply Now</Button>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Pages</h2>
            <Link to='/sign-up'>Home</Link>
            <Link to='/'>Student</Link>
            <Link to='/'>Team</Link>
            <Link to='/'>Blog</Link>
            <Link to='/'>Vibespace</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Campus Life</h2>
            <Link to='/'>Campus Services</Link>
            <Link to='/'>Getting Here</Link>
            <Link to='/'>Campus Navigation</Link>
            <Link to='/'>Security</Link>
            <Link to='/'>Discourse</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>

          <div class='footer-link-items'>
            <h2>Facilities</h2>
            <Link to='/'>Library</Link>
            <Link to='/'>Computer Centre</Link>
            <Link to='/'>Central Workshop</Link>
            <Link to='/'>Bus Schedule</Link>
            <Link to='/'>Medical Facilities</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Me</h2>
            <Link to='/'>Email - srkm@msme.iith.ac.in</Link>
            <Link to='/'>Office - 207 MSME Block</Link>
            <Link to='/'>Office Phone No. - (040) 2301 - 6560</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <p className='copyright'>
          © 2024 Indian Institute of Technology Hyderabad, Kandi, Sangareddy, Telangana, India. All rights reserved.
        </p>
      </section>
    </div>
  );
}

export default Footer;
