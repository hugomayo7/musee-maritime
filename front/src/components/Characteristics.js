import React from 'react'
import SpinnerDotWidget from './widgets/SpinnerDotWidget'
import BoatDetailTableCharacWidget from "./widgets/BoatDetailTableCharacWidget"


export default function Characteristics (props) {
  return props?.characteristics ? (
    <BoatDetailTableCharacWidget  characteristics={props.characteristics} key="characteristics"/>
  ) : (
    <SpinnerDotWidget />
  )
}
