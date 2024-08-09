import React from 'react'
import { Button } from '../Button/Button';
import coverImg from '../../assets/cover.jpeg'
import Cover from '../../../public/image/HeroSection/4.jpeg'
import './BlogHeroSection.css'

const BlogHeroSection = () => {
    return (
        <div className='blog-hero-container'>
            <img className='blog-hero-cover' src={Cover} alt="cover" />

                <h1>Blog Section</h1>
                <p>Here you'll find usefull blogs written by me</p>
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

export default BlogHeroSection;