import {NavLink} from "react-router-dom"
import { useState,useRef } from "react"
import logo from '../assets/shared/logo.svg'
import menuIcon from '../assets/shared/icon-hamburger.svg'
import closeIcon from '../assets/shared/icon-close.svg'
export default function Header(){
    const [isOpen,setOpen]= useState(false)
    const navRef = useRef(null)

    const buttonStyle = isOpen ?
    {backgroundImage : `url(${closeIcon})`}
    :{backgroundImage : `url(${menuIcon})`}
    
    const activeStyle = {
        borderBottom: "3px solid #D0D6F9"
    }

    function toggleDisplay(){
        setOpen(prevOpen=> !prevOpen)
        if(navRef.current.getAttribute("data-visible")){
            navRef.current.setAttribute("data-visible", true)
        }
        else{
           navRef.current.setAttribute("data-visible", false)
        }
    }
        

    return(
        <div className="header-div">
            <img src = {logo}/>
            <button  className='hamburger-menu' style={buttonStyle} onClick={toggleDisplay}></button>
        
            <div ref={navRef} data-visible={isOpen} className="nav-bar up" >
            <NavLink 
                style={({isActive})=>isActive?activeStyle:null}
                to='.'><span>00</span>Home</NavLink>
            <NavLink 
                style={({isActive})=>isActive?activeStyle:null}
                to='destination'><span>01</span>Destination</NavLink>
            <NavLink
                style={({isActive})=>isActive?activeStyle:null} 
                to='crew'><span>02</span>Crew</NavLink>
            <NavLink 
                style={({isActive})=>isActive?activeStyle:null}
                to='technology'><span>03</span>Technology</NavLink>
            </div>
        </div>     
    )
}