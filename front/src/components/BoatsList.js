import React, { useEffect, useRef, useState } from 'react'
import BoatCard from './BoatCard'
import styles from './BoatsList.module.css'
import loadingIcon from '../static/icons/loading.svg'

export default function BoatsList (props) {

  const mounted = useRef(false)
  let [content, setContent] = useState(null)

  useEffect(() => {
    mounted.current = true
    return () => (mounted.current = false)
  })

  useEffect(() => {
    if (mounted && props.boatsData) {
      let content = []
      for (let i = 0; i < props.boatsData.length; i++) {
        let boats = [props.boatsData[i], props.boatsData[i + 1]]
        content.push(
          <div key={i}>
            <BoatCard boat={boats[0]}></BoatCard>
            <BoatCard boat={boats[1]}></BoatCard>
          </div>
        )
        i++
      }
      setContent(content)
    }
  }, [props.boatsData, setContent])

  return content ? (
    <div className={`${styles.disposition}`}>{content}</div>
  ) : (
    <div className={styles.loading}>
      <img src={loadingIcon} alt='loading'></img>
    </div>
  )
}
