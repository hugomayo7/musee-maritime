import styles from './MuseumStateWidget.module.css'
import myPromise from '../../tests/api/museum'
import { useEffect, useRef, useState } from 'react'

function MuseumStateWidget () {
  const [state, setState] = useState('Chargement ...')
  const [dotIcon, setDotIcon] = useState(styles.loading)
  const [textType, setTextType] = useState(styles.textLoading)
  const mounted = useRef(false)

  useEffect(() => {
    mounted.current = true
    return () => (mounted.current = false)
  })

  useEffect(() => {
    const fetchData = async () => {
      await myPromise.then(e => {
        if (mounted.current) {
          if (e.museum.open) {
            setState('Musée Ouvert')
            setDotIcon(styles.open)
            setTextType(styles.text)
          } else {
            setState('Musée Fermé')
            setDotIcon(styles.close)
            setTextType(styles.text)
          }
        }
      })
    }

    fetchData()
    // Auto refresh 10sec
    setInterval(() => {
      fetchData()
    }, 10000)
  }, [])

  return (
    <div className={`${styles.disposition}`}>
      <div className={`${styles.dot} ${dotIcon}`} />
      <span className={`${textType}`}>{state}</span>
    </div>
  )
}

export default MuseumStateWidget
