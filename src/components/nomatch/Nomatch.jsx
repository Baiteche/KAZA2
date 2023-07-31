
import React from 'react'
import './Nomatch.css'
import Header from '../header/Header'

export default function Nomatch() {
  return (
    <>
    <Header/>
    <div className='nomatch'>
      <h1>404</h1>
      <p >Oups! La page que vous demandez n'existe pas.</p>
    </div>
    </>
  )
}

