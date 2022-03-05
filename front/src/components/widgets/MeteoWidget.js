import styles from './MeteoWidget.module.css'
import { useEffect, useState } from 'react'
import myPromise from '../../tests/api/meteo'
import loadingIcon from '../../static/icons/loading.svg'

function MeteoWidget () {
  const [temp, setTemp] = useState('--')
  const [conditions, setConditions] = useState('')
  const [icon, setIcon] = useState(loadingIcon)

  useEffect(() => {
    const fetchData = async () => {
      await myPromise.then(e => {
        setTemp(e.meteo.temp)
        setConditions(e.meteo.currentConditions)
        setIcon(
          'https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/' +
            e.meteo.icon +
            '.svg'
        )
      })
    }
    fetchData()
  }, [])

  return (
    <div className={`${styles.disposition}`}>
      <div className={`${styles.texts}`}>
        <span>{conditions} </span>
        {temp !== '--' ? <span className={`${styles.separation}`} /> : <></>}
        <span> {temp}°C</span>
      </div>
      <img src={icon} alt='Affichage de la météo' className={`${styles.img}`} />
    </div>
  )
}

export default MeteoWidget
