import React from 'react'
import styles from './BoatDetailsView.module.css'
import Header from '../components/Header'
import BoatState from '../components/widgets/BoatState'
import HeaderWidget from '../components/widgets/HeaderWidget'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function BoatDetailsView (props) {
  const { id } = useParams()
  const [boat, setBoat] = useState({
    id: props.selectedBoat !== undefined ? props.selectedBoat : -1,
    name: 'Chargement',
    state: -1,
    stateText: 'Chargement en cours...'
  })

  useEffect(() => {
    if (props.boatsData)
      setBoat(
        props?.boatsData?.filter(el => {
          return el.id.toString() === id
        })[0]
      )
  }, [id, props, setBoat])

  const widgets = [<BoatState boatData={boat} key={1} />]

  return (
    <div>
      <Header title={boat?.name} />
      <div className={styles.dispositioncenter}>
        <HeaderWidget widgets={widgets} />
      </div>
    </div>
  )
}
