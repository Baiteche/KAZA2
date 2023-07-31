import React from 'react'
import './Footer.css'
import Foot from './../../assets/footer-logo.png'

export default function Footer() {
  return (
    <footer>
        
       <img src={Foot} alt="footer-image" />
       <h5 className='reserved'>© 2020 Kasa. All rights reserved</h5>
    </footer>
  )
}
