import React from 'react'
import'./Apropos.css'
import Header from '../../components/header/Header'
import Banner from '../../components/Banner/Banner'
import Accordion from '../../components/accordion/accordion'
import Footer from '../../components/footer/Footer'

export default function Apropos() {
  return (
    <div className='apropos'>
    <Header/>
    <Banner/>
    <main className='accordion-apropos'>
    <Accordion title="FIabilité" description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
 régulièrement vérifiées par nos équipes."/>
    <Accordion title="Respect" description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
perturbation du voisinage entraînera une exclusion de notre plateforme."/>
    <Accordion title="Service"/>
    <Accordion title="Sécurité" description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
également des ateliers sur la sécurité domestique pour nos hôtes."/>
    </main>
    <Footer/>

    </div>
  )
}
