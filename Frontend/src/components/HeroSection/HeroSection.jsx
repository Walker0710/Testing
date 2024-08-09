import React from 'react'
import { Button } from '../Button/Button';
import './HeroSection.css'
import coverImg from '../../assets/cover.jpeg'
import Cover from '../../../public/image/HeroSection/2.jpeg'

const HeroSection = () => {
    return (
        <div className='home-hero-container'>
            <img className='home-hero-cover' src={Cover} alt="cover" />

                <h1>SAI RAMA KRISHNA MALLADI</h1>
                <p>Department of MSME - IIT Hyderabad</p>
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

export default HeroSection;