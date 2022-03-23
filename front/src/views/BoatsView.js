import React from 'react'
import BoatsList from '../components/BoatsList'
import Header from '../components/Header'

export default function BoatsView (props) {
  return (
    <div>
      <Header title={"Détail de la flotte"}/>
      <BoatsList boatsData={props.boatsData}/>
    </div>
  )
}
