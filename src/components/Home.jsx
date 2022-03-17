import React from 'react'
import Layouts from './Layout/Layouts'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowDown,faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const home =() => {

  const layout_Mobile = () =>{
    let layout = document.getElementById('Content_Grid')
    layout.style.gridTemplateColumns=('70% 30%')
  }

  const hideLayout = ()=>{
    const layout = document.getElementById('Content_Grid')
    layout.style.gridTemplateColumns=('0% 100%')
  }
  return (
    <>
     <div id='Content_Grid'>
     <Layouts hideLayout={hideLayout}/>
     <div id='Home_Background'>

       <button id='Home_buttonMobile' onClick={layout_Mobile}><FontAwesomeIcon id='ArrowRight' icon={faArrowCircleRight}/></button>
    
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