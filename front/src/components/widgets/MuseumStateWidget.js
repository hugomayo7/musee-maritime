import styles from './MuseumStateWidget.module.css'

function MuseumStateWidget () {
  return (
    <div className={`${styles.disposition}`}>
      <div className={`${styles.dot} ${styles.open}`} />
      <span className={`${styles.text}`}>Musée ouvert</span>
    </div>
  )
}

export default MuseumStateWidget
