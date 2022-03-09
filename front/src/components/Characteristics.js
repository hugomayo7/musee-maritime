import React from 'react'
import SpinnerDotWidget from './widgets/SpinnerDotWidget'


export default function Characteristics (props) {
  return props?.characteristics ? (
    <div>characteristics</div>
  ) : (
    <SpinnerDotWidget />
  )
}
