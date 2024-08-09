import React, { useState } from 'react';
import Card from './CardFun';
import './FunSection.css'
import cardimg1 from '../../assets/cover.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const FunSection = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-out',
      delay: 100,
      once: true,
    });
  }, []);

  const [showAll, setShowAll] = useState(false);

  const cards = [
    { id: 1, img: '../../../public/image/cardImg1.jpg', title: 'Card 1', content: 'This is card 1' },
    { id: 2, img: '../../../public/image/cardImg1.jpg', title: 'Card 2', content: 'This is card 2' },
    { id: 3, img: '../../../public/image/cardImg1.jpg', title: 'Card 3', content: 'This is card 3' },
    { id: 4, img: '../../../public/image/cardImg1.jpg', title: 'Card 4', content: 'This is card 4' },
    { id: 5, img: '../../../public/image/cardImg1.jpg', title: 'Card 5', content: 'This is card 5' },
    { id: 6, img: '../../../public/image/cardImg1.jpg', title: 'Card 6', content: 'This is card 6' },
  ];

  const displayedCards = showAll ? cards : cards.slice(0, 3);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <div className='fun-container' data-aos="fade-up">
      <div className='fun-heading' data-aos="fade-up">
        Entertainment Section
      </div>
      <div data-aos="fade-up">
        <p className='fun-content'>Promo boxes are hyperlinked containers with a title, description, image, and link.
          Their purpose is to triage users to desired content. Promo box areas 1 and 2 can show 0-8 boxes.
          You can use these areas to leverage content that you want your site visitor to see right away.</p>
      </div>
      {/* <div className='fun-cards' data-aos="fade-up">
        {displayedCards.map(card => (
          <Card key={card.id} src={card.src} title={card.title} content={card.content} />
        ))}
      </div> */}
      <div className='fun-card-container' data-aos="fade-up">
        {displayedCards.map(card => (
          <div className='fun-card' key={card.id} data-aos="fade-up">
            <img className='fun-card-img' src={card.img} alt="dsdg" data-aos="fade-up" />
            <h2 className='fun-card-heading' data-aos="fade-up">
              {/* <Link to={`/blogs/${card.id}`}>{card.title}</Link>
               */}
              {card.title}
            </h2>
            <p className='fun-card-content' data-aos="fade-up">{card.content}</p>
          </div>
        ))}
      </div>
      <div data-aos="fade-up">
        <button className='fun-button' onClick={handleToggle}>
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
};

export default FunSection;
