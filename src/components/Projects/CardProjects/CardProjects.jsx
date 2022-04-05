import React,{useEffect} from 'react'
import './CardProjects.css'
import { ScrollRevelar } from '../ProyectsScrollReveal'

const CardProjects =({url,name,img,skills}) => {

    useEffect(() => {
        ScrollRevelar()
    }, [])
    
  return (
    <>
    <div id='CardProject'>
    <a href={url} target='_blank'>
    <img id='CardProject_Image' src={img}></img>
     <p>{name}</p>
     <div id='Skills_ContentFlex'>{skills}</div>
     </a>
    </div> 

    </>
  )
}

export default CardProjects