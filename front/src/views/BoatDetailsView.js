import React, { useState } from 'react'
import style from './BoatDetailsView.module.css'
import Header from '../components/Header'

export default function BoatDetailsView (props) {
  const boat = props.boat

  return (
    <div>
      <Header title={boat?.name} />
    </div>
  )
}
