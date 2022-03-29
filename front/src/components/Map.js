import { useState } from 'react'
import styles from './Map.module.css'

import BoatWidget from './widgets/BoatWidget'
import MapWidget from './widgets/MapWidget'

function Map (props) {
  const [selectedBoat, setSelectedBoat] = useState()

  return (
    <div className={`${styles.disposition}`}>
      <MapWidget setSelectedBoat={setSelectedBoat} boatsData={props.boatsData} />
      <BoatWidget selectedBoat={selectedBoat} boatsData={props.boatsData}/>
    </div>
  )
}

export default Map
