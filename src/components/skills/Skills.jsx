import React,{useEffect} from 'react'
import './Skills.css'
import MongoDB from '../../assets/mongodb-logo.png'
import SpringBoot from '../../assets/springboot.png'
import mysql from '../../assets/mysql.png'
import NextJs from '../../assets/Next-js.png'
import Jquery from '../../assets/jquery.png'
import Firebase from '../../assets/firebase.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact,faHtml5,faBootstrap,faJs,faNodeJs,faSass,faCss3,faJava} from '@fortawesome/free-brands-svg-icons'
import { ScrollRevelar } from './ScrollReveal'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Skills =() => {
  const {skills} = useParams()
  useEffect(() => {
    ScrollRevelar()
  }, [skills])


  return (
    <>
   <div id='Skills_Background'>
   <div id='Skills_BackgroundOpacity'></div>
   <div id='Skills_FlexLinks'>
   <Link className='Skills_Link' to='/AboutMe'>About Me</Link>
   <Link className='Skills_Link' to='/Projects'>Projects</Link>
   <Link className='Skills_Link' to='/Contact'>Contact</Link>
   </div>
    <h2 id='Skills_H2'>My Skills</h2>
    <div id='Skills_ContainerSkillsFlex'>
       <div id='container1'><FontAwesomeIcon id='Skills_ReactItem' icon={faReact}/></div>
       <div id='container1'><FontAwesomeIcon id='Skills_JavaItem' icon={faJava} /></div>
       <div id='container10'><img id='Skills_SpringItem' src={SpringBoot}/> </div>
       <div id='container2'><img id='Skills_MongoDBItem' src={MongoDB}/></div>
       <div id='container3'><FontAwesomeIcon id='Skills_NodeItem'  icon={faNodeJs}/></div>
       <div id='container4'><FontAwesomeIcon id='Skills_JsItem'   icon={faJs}/></div>
       <div id='container5'><FontAwesomeIcon id='Skills_HtmlItem'   icon={faHtml5}/></div>
       <div id='container6'><FontAwesomeIcon id='Skills_CssItem'  icon={faCss3}/></div>
       <div id='container7'><FontAwesomeIcon id='Skills_BootstrapItem'   icon={faBootstrap}/></div>
       <div id='container10'><img id='Skills_FirebaseItem' src={Firebase}/> </div>
       <div id='container12'><img id='Skills_NextJSItem' src={NextJs}/></div>
       <div id='container13'><img id='Skills_JqueryItem' src={Jquery}/></div>
       <div id='container10'><img id='Skills_MysqlItem' src={mysql}/> </div>
 
    </div>
    </div>
    </>
  )
}

export default Skills