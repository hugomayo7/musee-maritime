import React, { useEffect, useRef, useState } from 'react'
import BoatCard from './BoatCard'
import styles from './BoatsList.module.css'
import myPromise from '../tests/api/boats'
import loadingIcon from '../static/icons/loading.svg'

export default function BoatsList () {
  const [boatsData, setBoatsData] = useState()
  const mounted = useRef(false)
  let [content, setContent] = useState(null)

  useEffect(() => {
    mounted.current = true
    return () => (mounted.current = false)
  })

  useEffect(() => {
    const fetchData = async () => {
      await myPromise.then(e => {
        if (mounted.current) {
          setBoatsData(e.boatsList)
        }
      })
    }
    fetchData()
  }, [setBoatsData])

  useEffect(() => {
    if (mounted && boatsData) {
      let content = []
      for (let i = 0; i < boatsData.length; i++) {
        let boats = [boatsData[i], boatsData[i + 1]]
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
  }, [boatsData, setContent])

  return content ? (
    <div className={`${styles.disposition}`}>{content}</div>
  ) : (
    <div className={styles.loading}>
      <img src={loadingIcon} alt='loading'></img>
    </div>
  )
}
