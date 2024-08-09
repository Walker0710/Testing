import { useEffect } from 'react';
import React, { useState } from 'react';
import CardComponent from './CoursesCard';
import './CoursesOffered.css';
import AOS from 'aos';
import 'aos/dist/aos.css'

const cards = [
  {
    title: 'Card 1',
    code: 'MA11002',
    credits: 'By prof Krishna',
    shortDescription: 'Promo boxes are hyperlinked containers with a title, description, image, and link Their purpose is to triage users to desired content. Promo box areas 1 and 2 can show 0-8 boxes. You can use these areas to leverage content that you want your site visitor to see right away.',
  },
  {
    title: 'Card 2',
    code: 'MA11002',
    credits: 'By prof Krishna',
    shortDescription: 'Promo boxes are hyperlinked containers with a title, description, image, and link Their purpose is to triage users to desired content. Promo box areas 1 and 2 can show 0-8 boxes. You can use these areas to leverage content that you want your site visitor to see right away.',
  },
  {
    title: 'Card 3',
    code: 'MA11002',
    credits: 'By prof Krishna',
    shortDescription: 'Promo boxes are hyperlinked containers with a title, description, image, and link Their purpose is to triage users to desired content. Promo box areas 1 and 2 can show 0-8 boxes. You can use these areas to leverage content that you want your site visitor to see right away.',
  },
  {
    title: 'Card 4',
    code: 'MA11002',
    credits: 'By prof Krishna',
    shortDescription: 'Promo boxes are hyperlinked containers with a title, description, image, and link Their purpose is to triage users to desired content. Promo box areas 1 and 2 can show 0-8 boxes. You can use these areas to leverage content that you want your site visitor to see right away.',
  },
  {
    title: 'Card 5',
    code: 'MA11002',
    credits: 'By prof Krishna',
    shortDescription: 'Promo boxes are hyperlinked containers with a title, description, image, and link Their purpose is to triage users to desired content. Promo box areas 1 and 2 can show 0-8 boxes. You can use these areas to leverage content that you want your site visitor to see right away.',
  },
];

const CoursesOffered = () => {
  const [showAll, setShowAll] = useState(false);
  
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-out',
      delay: 100,
      once: true,
    });
  }, []);

  const visibleCards = showAll ? cards : cards.slice(0, 3);

  return (
    <div className="course-all" data-aos="fade-up">
      <div className='course-heading' data-aos="fade-up">
        Courses Offered
      </div>
      <div data-aos="fade-up">
      <p className='course-content' >Promo boxes are hyperlinked containers with a title, description, image, and link.
                Their purpose is to triage users to desired content. Promo box areas 1 and 2 can show 0-8 boxes.
                You can use these areas to leverage content that you want your site visitor to see right away.</p>
      </div>
      {/* {visibleCards.map((card, index) => (
        <CardComponent key={index} card={card} index={index} />
      ))} */}
      <div data-aos="fade-up">
      {visibleCards.map((card, index) => (
        <CardComponent key={index} card={card} index={index} />
      ))}
      </div>
      <button onClick={toggleShowAll} data-aos="fade-up">
        {showAll ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
}

export default CoursesOffered;
