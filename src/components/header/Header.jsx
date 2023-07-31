import React from 'react'
import {NavLink} from 'react-router-dom'
import LOGO from './../../assets/LOGO.png'
import './header.css'

export default function Header() {
  return (
   
    
    <header >
    < img className='logo-div' src={LOGO} alt="LOGO" />
    <nav className='links-div'>
    <NavLink  to='/'>Accueil</NavLink>
    <NavLink  to ='/apropos'>A propos</NavLink>
    </nav>
      
    </header>
   
  )
}
