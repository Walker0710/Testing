import React, {useEffect} from 'react'
import './ProfInfo.css'
import profilePic from '../../assets/profPic.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'

const ProfInfo = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-out',
      delay: 100,
      once: true,
    });
  }, []);

  return (
    <div className='info-container' data-aos="fade-up">
        <div className='profile' data-aos="fade-up">
            <img className='prof-info-profile-pic' src={profilePic} alt="profi"/>
        </div>
        <div data-aos="fade-up">
          <h1 className='name-stuff'>Prof. Sairama Krishna</h1>
        </div>
        <div className='content' data-aos="fade-up">
            <p className='prof-info-content'>Propfessor Sai Rama is a distinguished faculty member in the Department of Materials Science and Metallurgical 
            Engineering at IIT Hyderabad. He specializes in nanomaterials, biomaterials, and advanced composites. Known for 
            his engaging teaching style, he inspires students and contributes significantly to advancements in materials 
            research through his innovative work.</p>
        </div>
    </div>
  )
}

export default ProfInfo;