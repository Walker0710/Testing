import React, { useEffect } from 'react'
import './OngoingResearch.css'
import './OngoingResearch.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

const OngoingResearch = () => {

    const cards = [
        { id: 1, img: '../../../public/image/cardImg1.jpg', title: 'Card 1', content: 'This is card 1' },
        { id: 2, img: '../../../public/image/cardImg1.jpg', title: 'Card 2', content: 'This is card 2' },
        { id: 3, img: '../../../public/image/cardImg1.jpg', title: 'Card 3', content: 'This is card 3' },
    ];

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
        <div className='ongoing-container' data-aos="fade-up">
            <h1 className='ongoing-heading' data-aos="fade-up">Ongoing Research</h1>
            <p className='ongoing-content' data-aos="fade-up">Promo boxes are hyperlinked containers with a title, description, image, and link.
                Their purpose is to triage users to desired content. Promo box areas 1 and 2 can show 0–8 boxes.
                You can use these areas to leverage content that you want your site visitor to see right away.</p>

            <p className='ongoing-content' data-aos="fade-up">Promo boxes are hyperlinked containers with a title, description, image, and link.
                Their purpose is to triage users to desired content. Promo box areas 1 and 2 can show 0–8 boxes.
                You can use these areas to leverage content that you want your site visitor to see right away.</p>


            <div className='ongoing-card-container' data-aos="fade-up">
                {cards.map(card => (
                    <div className='ongoing-card' key={card.id} data-aos="fade-up">
                        <img className='ongoing-card-img' src={card.img} alt="dsdg" data-aos="fade-up" />
                        <h2 className='ongoing-card-heading' data-aos="fade-up">
                            {card.title}
                        </h2>
                        <p className='ongoing-card-content' data-aos="fade-up">{card.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OngoingResearch;