import React,{useEffect} from 'react'
import './CardProjects.css'
import { ScrollRevelar } from '../ProyectsScrollReveal'

const CardProjects =({url,name,img,skills}) => {

    useEffect(() => {
        ScrollRevelar()
    }, [])
    
  return (
    <>
    <a href={url} target='_blank'>
    <div id='CardProject'>
    <img id='CardProject_Image' src={img}></img>
     <p>{name}</p>
     <div id='Skills_ContentFlex'>{skills}</div>
    </div> 
    </a>
    </>
  )
}

export default CardProjects