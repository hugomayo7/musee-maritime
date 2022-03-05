import styles from './BoatWidget.module.css'
import myPromise from '../../tests/api/boats'
import { useEffect, useState } from 'react'
import Skel from '../Skel'

function BoatWidget (props) {
  const [boatsData, setBoatsData] = useState()
  const [boatData, setBoatData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      await myPromise.then(e => {
        setBoatsData(e.boatsList)
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
        open: -1,
        openText: 'Chargement en cours...'
      })
  }, [props, setBoatData, boatsData])

  if (props.selectedBoat !== undefined)
    return (
      <div className={`${styles.disposition}`}>
        <div className={`${styles.textcontent}`}>
          <div className={`${styles.dispositionleft}`}>
            <div className={`${styles.title}`}>
              <span className={`${styles.idboat}`}>{boatData?.id + 1}</span>
              <span className={`${styles.nameboat}`}>{boatData?.name}</span>
            </div>
            <div className={`${styles.description}`}>
              <span
                className={`${styles.dot} ${
                  boatData?.open === 1
                    ? styles.open
                    : boatData?.open === 0
                    ? styles.close
                    : styles.loading
                }`}
              />
              <span className={`${styles.descriptiontext}`}>
                {boatData?.openText}
              </span>
            </div>
          </div>
          <div className={`${styles.button}`}>
            <button>&gt; En savoir plus</button>
          </div>
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
