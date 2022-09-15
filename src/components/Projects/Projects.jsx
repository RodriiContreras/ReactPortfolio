import React from 'react'
import CardProjects from './CardProjects/CardProjects'
import './Projects.css'
import MernImage from '../../assets/ProjectImages/MERN.jpg'
import ReactCoderhouse from '../../assets/ProjectImages/React-Coderhouse.png'
import CoderJS from '../../assets/ProjectImages/javascript.png'
import WebDevelopment from '../../assets/ProjectImages/html.png'
import AenimaProject from '../../assets/ProjectImages/Aenima.jpg'
import MongoDB from '../../assets/mongodb-logo.png'
import Next from '../../assets/Next-js.png'
import MySQL from '../../assets/mysql.png'
import Jquery from '../../assets/jquery.png'
import Firebase from '../../assets/firebase.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact,faHtml5,faBootstrap,faJs,faNodeJs,faSass,faCss3,faJava} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import SPAposts from '../../assets/ProjectImages/SPAPosts.jpg'



function Projects() {

  
  const objectsArray = [
    {
    id:'container1',
    name:'React MERN',
    img:MernImage,
    url:'https://frontend-merncadolibre.herokuapp.com/',
    skills:
    [
   <FontAwesomeIcon id='ReactIcon' icon={faReact}/>,
   <FontAwesomeIcon id='NodeIcon' icon={faNodeJs}/>,
    <img id='MongoDB' src={MongoDB}/>,
    <FontAwesomeIcon id='BootstrapIcon' icon={faBootstrap}/>]
    },
    {
      name:'Blogs SPA (In progress)',
      img:SPAposts,
      skills:
      [
     <FontAwesomeIcon id='ReactIcon' icon={faReact}/>,
     <FontAwesomeIcon id='JavaIcon' icon={faJava}/>,
     <img id='GraphQLIcon' src={Next}/>,
     <img id='MySQL' src={MySQL}/>,]
      },
    {
    name:'React Coderhouse',
    img:ReactCoderhouse,
    url:'https://serene-cove-23834.herokuapp.com/',
    skills:
    [<FontAwesomeIcon id='ReactIcon' icon={faReact}/>,
    <img id='Firebase' src={Firebase}/>,
    <FontAwesomeIcon id='HtmlIcon' icon={faHtml5}/>,
    <FontAwesomeIcon id='CssIcon' icon={faCss3}/>]
    },

    {name:'Javascript Coderhouse',
    img:CoderJS,
    url:'https://proyecto-js-sand.vercel.app/',
    skills:[
    
    <FontAwesomeIcon id='JsIcon' icon={faJs}/>,
    <img id='JqueryIcon' src={Jquery}/>,
    <FontAwesomeIcon id='HtmlIcon' icon={faHtml5}/>,
    <FontAwesomeIcon id='CssIcon' icon={faCss3}/>
,
    ]},
    {name:'Web Development Coder',
    img:WebDevelopment,
    url:'https://prueba2-hafnet.vercel.app/',
    skills:[
     <FontAwesomeIcon id='HtmlIcon' icon={faHtml5}/>,
     <FontAwesomeIcon id='CssIcon' icon={faCss3}/>,
     <FontAwesomeIcon id='CssIcon' icon={faSass}/>,
     <FontAwesomeIcon id='BootstrapIcon' icon={faBootstrap}/>]
    },
    {
    name:'Aenima Project',
    img:AenimaProject,
    url:'https://aenima-app.herokuapp.com/',
    skills:[
    <FontAwesomeIcon id='ReactIcon' icon={faReact}/>,
    <FontAwesomeIcon id='HtmlIcon' icon={faHtml5}/>,
    <FontAwesomeIcon id='CssIcon' icon={faCss3}/>]
    }
  ]



  return (
    <div id='Projects_Background'>
      <div id='Project_FlexLinks'>
      <Link className='Projects_Links' to='/Skills'>Skills</Link>
      <Link className='Projects_Links' to='/AboutMe'>About Me</Link>
      <Link className='Projects_Links' to='/Contact'>Contact Me</Link>
      </div>
       <h2 id='Projects_h2'>My Projects</h2>
       <div id='Projects_DivContentFlex'>
         { objectsArray? objectsArray.map(item=>(
          <CardProjects name={item.name} url={item.url} skills={item.skills} img={item.img}/>
         ))
         :null
         }

       </div>
    </div>
  )
}

export default Projects