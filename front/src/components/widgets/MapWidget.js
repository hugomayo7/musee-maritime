import styles from './MapWidget.module.css'
import React, { useEffect, useState } from 'react'
import icon from "../../static/icons/circle.svg"

import L from 'leaflet'

function MapWidget () {
  useEffect(() => {
    let map = L.map('map', {
      center: [46.153059, -1.151814],
      zoom: 16,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    })

    L.marker([46.153059, -1.151814], {
        icon: L.icon({iconUrl: icon,iconSize: [40, 40]})
    }).addTo(map);
  }, [])

  return (
    <div className={`${styles.disposition}`}>
      <div id='map' className={`${styles.map}`}></div>
    </div>
  )
}

export default MapWidget
