import Header from '../components/Header'
import WeatherCard from '../components/WeatherCard'
import styles from './WeatherView.module.css'

export default function WeatherView(props) {

  return (
    <div className={styles.maindiv}>
      <Header title={"Quel temps fait il ?"} />
      <div className={styles.weatherCards}>
        <div className={styles.titleBox}><p className={styles.title}>Aujourd'hui</p></div>
        <div className={styles.today}>
          <WeatherCard weatherData={props?.meteo} id='0' />
        </div>
        <div className={styles.forecast}>
          <div className={styles.content_card}>
            <div className={styles.titleBox}><p className={styles.title}>Demain</p></div>
            <div className={styles.fore}>
              <WeatherCard weatherData={props?.meteo} id='1' />
            </div>
          </div>
          <div className={styles.content_card}>
            <div className={styles.titleBox}><p className={styles.title}>Après-demain</p></div>
            <div className={styles.fore}>
              <WeatherCard weatherData={props?.meteo} id='2' />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
