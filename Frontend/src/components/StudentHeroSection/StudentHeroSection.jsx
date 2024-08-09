import React from 'react'
import { Button } from '../Button/Button';
import coverImg from '../../assets/cover.jpeg'
import './StudentHeroSection.css'
import Cover from '../../../public/image/HeroSection/5.jpeg'

const StudentHeroSection = () => {
    return (
        <div className='student-hero-container'>
            <img className='student-hero-cover' src={Cover} alt="cover" />

                <h1>Students Section</h1>
                <p>Get Usefull Resourses</p>
                <div className='hero-btns'>
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                    >
                        GET STARTED
                    </Button>
                </div>
        </div>
    )
}

export default StudentHeroSection;
