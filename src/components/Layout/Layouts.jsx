import React from 'react'
import { Link } from 'react-router-dom'
import './Layouts.css'
import Arrow from '../../assets/icons/arrow.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook,faGithub,faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'


function Layouts({hideLayout}) {


  return (
    <div id='Layout_Background'>
      <button id='Button_Mobile' onClick={hideLayout}><FontAwesomeIcon id='Button_XIcon' icon={faX}/></button>
      <div id='Layout_MyPhoto'></div>
      <h1 id='Layout_h1'>Rodrigo Contreras</h1>
      <h2 id='Layout_h2'>Full-Stack Developer</h2>
      <div id='Layout_SectionsContent'>
      <Link className='Layout_Links' to='/'>Home <img src={Arrow}/></Link>
      <Link className='Layout_Links' to='/AboutMe'>About Me <img src={Arrow}/></Link>
      <Link className='Layout_Links' to='/Skills'>Skills <img src={Arrow}/></Link>
      <Link className='Layout_Links' to='/Projects'>Some Projects <img src={Arrow}/></Link>
      <Link className='Layout_Links' to='/Contact'>Contact Me <img src={Arrow}/></Link>


      </div>
      <div id='Layout_SocialMedia'>
        <a href='https://www.facebook.com/rodrigito.contre' target='_blank'><FontAwesomeIcon icon={faFacebook}/></a>
        <a href='https://github.com/RodriiContreras' target='_blank'><FontAwesomeIcon icon={faGithub}/></a>
        <a href='https://www.instagram.com/rodriicontrerass_/' target='_blank'><FontAwesomeIcon icon={faInstagram}/></a>
        <a href='https://www.linkedin.com/in/rodrigocontrerasdesarrollofullstack/' target='_blank'><FontAwesomeIcon icon={faLinkedin}/></a>
      </div>

    </div>
  )
}

export default Layouts