import React from 'react'
import { Button } from '../Button/Button';
import coverImg from '../../assets/cover.jpeg'
import Cover from '../../../public/image/HeroSection/5.jpeg';
import './OverflowHeroSection.css';

const OverflowHeroSection = () => {
    return (
        <div className='overflow-hero-container'>
            <img className='overflow-hero-cover' src={Cover} alt="cover" />

            <h1>Overflow</h1>
            <p>Discussion Portal</p>
            <div className='hero-btns'>
                <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                        to='/overflows/new'
                    >
                        ASK YOUR DOUBTS
                    </Button>
            </div>
        </div>
    )
}

export default OverflowHeroSection;