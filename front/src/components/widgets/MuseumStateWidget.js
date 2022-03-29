import styles from './MuseumStateWidget.module.css'
import { useEffect, useRef, useState } from 'react'

function MuseumStateWidget (props) {
  const mounted = useRef(false)

  const [dotStyle, setDotStyle] = useState(styles.loading)
  const [museumStateText, setMuseumStateText] = useState('Chargement ...')

  useEffect(() => {
    if (props.museum.state === -1) {
      setDotStyle(styles.loading)
      setMuseumStateText('Chargement ...')
    } else {
      if (props.museum.state === 0) {
        setDotStyle(styles.close)
        setMuseumStateText('Musée Fermé')
      } else {
        setDotStyle(styles.open)
        setMuseumStateText('Musée Ouvert')
      }
    }
  }, [props?.museum?.state])

  useEffect(() => {
    mounted.current = true
    return () => (mounted.current = false)
  })

  return (
    <div className={`${styles.disposition}`}>
      <div className={`${styles.dot} ${dotStyle}`} />
      <span
        className={`${
          props.museum.state === -1 ? styles.textLoading : styles.text
        }`}
      >
        {museumStateText}
      </span>
    </div>
  )
}

export default MuseumStateWidget
