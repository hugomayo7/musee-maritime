import React from 'react'
import SpinnerDotWidget from './widgets/SpinnerDotWidget'

export default function Historic(props) {
  return (
    props?.history?
    <div>{props?.history}</div>
    :
    <SpinnerDotWidget/>
  )
}
