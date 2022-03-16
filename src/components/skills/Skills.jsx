import React,{useEffect} from 'react'
import './Skills.css'
import MongoDB from '../../assets/mongodb-logo.png'
import Tailwind from '../../assets/Tailwind.png'
import NextJs from '../../assets/Next-js.png'
import Jquery from '../../assets/jquery.png'
import Apollo from '../../assets/apollo.png'
import Firebase from '../../assets/firebase.png'
import Materialize from '../../assets/Materializer.png'
import GraphQL from '../../assets/graphql.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact,faHtml5,faBootstrap,faJs,faNodeJs,faSass,faCss3} from '@fortawesome/free-brands-svg-icons'
import { ScrollRevelar } from './ScrollReveal'
import { useParams } from 'react-router-dom'

const Skills =() => {
  const {skills} = useParams()
  useEffect(() => {
    ScrollRevelar()
  }, [skills])


  return (
    <>
   <div id='Skills_Background'>
   <div id='Skills_BackgroundOpacity'></div>
    <h2 id='Skills_H2'>My Skills</h2>
    <div id='Skills_ContainerSkillsFlex'>
       <div id='container1'><FontAwesomeIcon id='Skills_ReactItem' icon={faReact}/></div>
       <div id='container2'><img id='Skills_MongoDBItem' src={MongoDB}/></div>
       <div id='container3'><FontAwesomeIcon id='Skills_NodeItem'  icon={faNodeJs}/></div>
       <div id='container4'><FontAwesomeIcon id='Skills_JsItem'   icon={faJs}/></div>
       <div id='container5'><FontAwesomeIcon id='Skills_HtmlItem'   icon={faHtml5}/></div>
       <div id='container6'><FontAwesomeIcon id='Skills_CssItem'  icon={faCss3}/></div>
       <div id='container7'><FontAwesomeIcon id='Skills_BootstrapItem'   icon={faBootstrap}/></div>
       <div id='container8'><img id='Skills_GraphQLItem' src={GraphQL}/></div>
       <div id='container9'><FontAwesomeIcon id='Skills_Sass'  icon={faSass}/></div>
       <div id='container10'><img id='Skills_FirebaseItem' src={Firebase}/> </div>
       <div id='container11'><img id='Skills_ApolloItem' src={Apollo}/> </div>
       <div id='container12'><img id='Skills_NextJSItem' src={NextJs}/></div>
       <div id='container13'><img id='Skills_JqueryItem' src={Jquery}/></div>
       <div id='container14'> <img id='Skills_TailwindItem' src={Tailwind}/></div>
       <div id='container15'> <img id='Skills_MaterializeItem' src={Materialize}/></div>
 
    </div>
    </div>
    </>
  )
}

export default Skills