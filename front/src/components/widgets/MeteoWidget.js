import styles from './MeteoWidget.module.css'
import { useEffect, useRef, useState } from 'react'
import getWeatherApi from '../../api/main/weather'
import loadingIcon from '../../static/icons/loading.svg'

function MeteoWidget () {
  const [temp, setTemp] = useState('--')
  const [conditions, setConditions] = useState('')
  const [icon, setIcon] = useState(loadingIcon)
  const mounted = useRef(false)

  useEffect(() => {
    mounted.current = true
    return () => (mounted.current = false)
  })

  useEffect(() => {
    const fetchData = async () => {
        await getWeatherApi(e => {
        if (mounted.current) {
          setTemp(e.temp)
          console.log(e.temp)
          setConditions(e.currentConditions)
          setIcon(
            'https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/' +
              e.icon +
              '.svg'
          )
        }
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
