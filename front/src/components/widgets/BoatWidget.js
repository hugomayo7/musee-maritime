import styles from './BoatWidget.module.css'
import image from '../../static/img/boat1.png'

function BoatWidget () {
  return (
    <div className={`${styles.disposition}`}>
      <div className={`${styles.textcontent}`}>
        <div className={`${styles.dispositionleft}`}>
          <div className={`${styles.title}`}>
            <span className={`${styles.idboat}`}>2</span>
            <span className={`${styles.nameboat}`}>Angoumois</span>
          </div>
          <div className={`${styles.description}`}>
            <span className={`${styles.dot} ${styles.open}`}></span>
            <span className={`${styles.descriptiontext}`}>
              Montée à bord autorisée
            </span>
          </div>
        </div>
        <div className={`${styles.button}`}>
          <button>&gt; En savoir plus</button>
        </div>
      </div>
      <div className={`${styles.image}`}>
        <img src={image} alt='Bateau selectionne'></img>
      </div>
    </div>
  )
}

export default BoatWidget
