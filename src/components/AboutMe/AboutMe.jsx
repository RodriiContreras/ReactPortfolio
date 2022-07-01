import React,{useEffect} from 'react'
import './AboutMe.css'
import { ScrollRevelar } from './scrollreveal/AboutScrollReveal'
import { Link } from 'react-router-dom'
const AboutMe =() => {


  // useEffect(() => { 
  //   ScrollRevelar()
  // }, [])

  return (
    <>
    <div id='AboutMe_Background'>
    <div id='AboutMe_LinksFlex'>
    <Link className='LinkSections' to='/Contact'> Contact Me</Link>
    <Link className='LinkSections' to='/Skills'> Skills</Link>
    <Link className='LinkSections' to='/Projects'> Projects</Link>
    </div>
    <div id='AboutMe_BackgroundOpacity'></div>
    <h2 id='AboutMe_h2'>About me</h2>
    <p id='AboutMe_p'>
    Hi User ! here Rodrigo Contreras, I'm 19 years old and Full-Stack Developer.
    I started in IT world and software programming in 2020 and after too many projects, +200 hours of development,
    I have some experience with my stack languages,
    from structuring a project to fix a bug or add some functions in our app.
    </p>
    <h3 id='AboutMe_Education'>Education</h3>
    <div id='AboutMe_EducationCert'>
      <div id='AboutMe_EducationBranch'><p id='AboutMe_Coderhouse'>Web Development - CoderHouse</p></div>

      <div id='AboutMe_EducationBranch2'><p id='AboutMe_Coderhouse'>Javascript - CoderHouse</p></div>

      <div id='AboutMe_EducationBranch2'><p id='AboutMe_Coderhouse'>React JS - CoderHouse</p></div>
      
      <div id='AboutMe_EducationBranch2'><p id='AboutMe_Coderhouse'>Advanced React - Udemy</p></div>

      <div id='AboutMe_EducationBranch2'><p id='AboutMe_Coderhouse'>Backend Node / GraphQL - Udemy</p></div>
      
      <div id='AboutMe_EducationBranch2'><p id='AboutMe_Coderhouse'>Advanced Javascript concepts - Udemy</p></div>

      <div id='AboutMe_EducationBranch2'><p id='AboutMe_Coderhouse'>English - Instituto Cultural Superior Británico</p></div>
    </div>
    </div>
    </>
  )
}

export default AboutMe