import styles from './MapWidget.module.css'
import React, { useEffect, useState } from 'react'

import L from 'leaflet'

function MapWidget (props) {
  const [map, setMap] = useState()
  const [boatsData, setBoatsData] = useState()

  useEffect(() => {setBoatsData(props.boatsData)}, [props.boatsData])

  useEffect(() => {
    const createMap = () => {
      if (!map) {
        let a_map = L.map('map', {
          center: [46.152059, -1.151814],
          zoomControl: false,
          zoom: 16,
          layers: [
            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
              attribution:
                '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            })
          ]
        })

        L.control
          .zoom({
            position: 'bottomleft'
          })
          .addTo(a_map)

        setMap(a_map)
      }
      if (map) {
        for (let i = 0; i < boatsData?.length; i++) {
          let marker = boatsData[i]
          L.marker([marker.position.lat, marker.position.lgn], {
            icon: L.divIcon({
              html: `<div id="iconMap${i + 1}"><div class=${
                styles.marker
              }><div/><span>${i + 1}</span></div>`,
              className: `${styles.icon}`
            })
          }).addTo(map)
          document
            .querySelector('#iconMap' + (i + 1).toString() + ' > div')
            .addEventListener('click', e => {
              for (let y = 0; y < boatsData?.length; y++) {
                document
                  .querySelector('#iconMap' + (y + 1).toString())
                  .querySelector('div')
                  .classList.remove(styles.selected)

                if (i === y) {
                  document
                    .querySelector('#iconMap' + (y + 1).toString())
                    .querySelector('div')
                    .classList.add(styles.selected)
                }
              }
              let selected = props.setSelectedBoat
              selected(i)
            })
        }
      }
    }
    createMap()
  }, [props.setSelectedBoat, boatsData, setMap, map])

  return (
    <div className={`${styles.disposition}`}>
      <div id='map' className={`${styles.map}`} />
    </div>
  )
}

export default MapWidget
