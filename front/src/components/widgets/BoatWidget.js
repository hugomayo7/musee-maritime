import styles from './BoatWidget.module.css'
import myPromise from '../../api/tests/boats'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Skel from '../Skel'
import BoatState from './BoatState'

function BoatWidget (props) {
  const [boatsData, setBoatsData] = useState()
  const [boatData, setBoatData] = useState()
  const mounted = useRef(false)

  useEffect(() => {
    mounted.current = true
    return () => (mounted.current = false)
  })

  useEffect(() => {
    const fetchData = async () => {
      await myPromise.then(e => {
        if (mounted.current) setBoatsData(e.boatsList)
      })
    }
    fetchData()
  }, [setBoatsData])

  useEffect(() => {
    if (boatsData) setBoatData(boatsData[props.selectedBoat])
    else
      setBoatData({
        id: props.selectedBoat !== undefined ? props.selectedBoat : -1,
        name: 'Chargement',
        state: -1,
        stateText: 'Chargement en cours...'
      })
  }, [props, setBoatData, boatsData])

  if (props.selectedBoat !== undefined)
    return (
      <div className={`${styles.disposition}`} id="boatwidget">
        <div className={`${styles.textcontent}`}>
          <div className={`${styles.dispositionleft}`}>
            <div className={`${styles.title}`}>
              <span className={`${styles.idboat}`}>
                {boatData?.id !== undefined ? boatData?.id : ''}
              </span>
              <span className={`${styles.nameboat}`}>{boatData?.name}</span>
            </div>
            <BoatState boatData={boatData} />
          </div>
          <Link to={'bateaux/' + boatData?.id} className={`${styles.button}`}>
            <button>&gt; En savoir plus</button>
          </Link>
        </div>
        <div className={`${styles.imagediv}`}>
          {boatData?.image ? (
            <img
              src={boatData?.image}
              className={`${styles.image}`}
              alt='Bateau selectionne'
            />
          ) : (
            <div className={`${styles.skel}`}>
              <Skel />
            </div>
          )}
        </div>
      </div>
    )

  return <></>
}

export default BoatWidget
