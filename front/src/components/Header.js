import styles from './Header.module.css'
import backgroundImage from '../static/img/background.png'

const Header = () => {
  return (
    <>
      <div className={`${styles.background}`}>
        <img src={backgroundImage} alt='bateau' className={`${styles.image}`}></img>
        <span className={`${styles.text}`}>
          Bassin à flot : histoire et témoignages
        </span>
      </div>
    </>
  )
}

export default Header
