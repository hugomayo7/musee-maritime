import styles from './MapWidget.module.css'
import React, { useEffect, useState } from 'react'

import L from 'leaflet'

function MapWidget (props) {
  const [map, setMap] = useState()

  useEffect(() => {
    const createMap = () => {
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

      let dataSet = [
        {
          position: {
            x: 46.153059,
            y: -1.151814
          }
        },
        {
          position: {
            x: 46.15128,
            y: -1.151834
          }
        }
      ]

      for (let i = 0; i < dataSet.length; i++) {
        let marker = dataSet[i]
        L.marker([marker.position.x, marker.position.y], {
          icon: L.divIcon({
            html: `<div id="iconMap${i + 1}"><div class=${
              styles.marker
            }><div/><span>${i + 1}</span></div>`,
            className: `${styles.icon}`
          })
        }).addTo(a_map)
        document
          .querySelector('#iconMap' + (i + 1).toString() + ' > div')
          .addEventListener('click', e => {
            for (let y = 0; y < dataSet.length; y++) {
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
            props.setSelectedBoat(i)
          })
      }

      setMap(a_map)
    }
    if(!map)
    createMap()
  }, [props, setMap, map])
  return (
    <div className={`${styles.disposition}`}>
      <div id='map' className={`${styles.map}`} />
    </div>
  )
}

export default MapWidget
