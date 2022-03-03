import styles from './MeteoWidget.module.css'
import weather from '../../static/icons/weather icons/static/day.svg'

function MeteoWidget () {
  return (
    <div className={`${styles.disposition}`}>
      <div className={`${styles.texts}`}>
        <span>Nuageux</span>
        <span className={`${styles.separation}`} />
        <span>15°C</span>
      </div>
      <img src={weather} alt='Affichage de la météo' className={`${styles.img}`}></img>
    </div>
  )
}

export default MeteoWidget
