import React from 'react'
import Layouts from './Layout/Layouts'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowDown} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const home =() => {
  return (
    <>
     <div id='Content_Grid'>
     <Layouts/>
     <div id='Home_Background'>
    
      <p id='Home_p'>Hi User!</p>
      <h2 id='Home_h2'>I'm Rodrigo Contreras</h2>
      <p id='Home_p2'>and <span id='Home_p2Span'>Full-Stack</span> Developer</p>
   
   
   
     
     
     <p id='Home_p3'>See my history</p>
      <Link id='Home_Link' to='/AboutMe'><FontAwesomeIcon id='Arrow_Icon' icon={faArrowDown}/></Link> 


     </div>
     </div>
    </>
  )
}

export default home