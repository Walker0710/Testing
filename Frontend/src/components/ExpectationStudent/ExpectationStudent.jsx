import React, {useEffect} from 'react'
import './ExpectationStudent.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

const ExpectationStudent = () => {
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
        <div className='expect-all' data-aos="fade-up">
            <div className='expect-heading' data-aos="fade-up">
                Expectation From Student
            </div>
            <div data-aos="fade-up">
                <p className='expect-content'>Promo boxes are hyperlinked containers with a title, description, image, and link.
                    Their purpose is to triage users to desired content. Promo box areas 1 and 2 can show 0-8 boxes.
                    You can use these areas to leverage content that you want your site visitor to see right away.</p>
            </div>
            <div data-aos="fade-up">
                <ul className='expect-list'>
                    <li data-aos="fade-up">every student must follow the code of conduct</li>
                    <li data-aos="fade-up">every student must follow the code of conduct</li>
                    <li data-aos="fade-up">every student must follow the code of conduct</li>
                    <li data-aos="fade-up">every student must follow the code of conduct</li>
                    <li data-aos="fade-up">every student must follow the code of conduct</li>
                    <li data-aos="fade-up">every student must follow the code of conduct</li>
                    <li data-aos="fade-up">every student must follow the code of conduct</li>
                </ul>
            </div>
        </div>
    )
}

export default ExpectationStudent;