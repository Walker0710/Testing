import React from 'react'
import RecommendedPapers from '../../components/RecommendedPapers/RecommendedPapers';
import CoursesOffered from '../../components/CoursesOffered/CoursesOffered';
import FunSection from '../../components/FunSection/FunSection';
import StudentHeroSection from '../../components/StudentHeroSection/StudentHeroSection';
import ExpectationStudent from '../../components/ExpectationStudent/ExpectationStudent';
import './Student.css'

const Student = () => {

  return (
    <div>
        <StudentHeroSection/>
        <div className='middle-student'>
        <RecommendedPapers/>
        <CoursesOffered/>
        <ExpectationStudent/>
        <FunSection/>
        </div>
    </div>
  )
}

export default Student;