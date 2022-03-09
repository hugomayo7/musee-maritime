import styles from './MuseumStateWidget.module.css'
import { useEffect, useRef } from 'react'

function MuseumStateWidget (props) {

  const mounted = useRef(false)

  useEffect(() => {
    mounted.current = true
    return () => (mounted.current = false)
  })

  

  
  return (
    <div className={`${styles.disposition}`}>
      <div className={`${styles.dot} ${props.museum.state===-1?styles.loading:props.museum.state===0?styles.close:styles.open}`} />
      <span className={`${props.museum.state===-1?styles.textLoading:styles.text}`}>{props.museum.state===-1?"Chargement ...":props.museum.state===0?"Musée Fermé":"Musée Ouvert"}</span>
    </div>
  )
}

export default MuseumStateWidget
