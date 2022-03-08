import React from 'react'
import BoatsList from '../components/BoatsList'
import Header from '../components/Header'
import styles from './BoatsView.module.css'

export default function BoatsView () {
  return (
    <div>
      <Header title={"Détail de la flotte"}/>
      <BoatsList/>
    </div>
  )
}
