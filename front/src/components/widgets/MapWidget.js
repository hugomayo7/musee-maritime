import styles from './MapWidget.module.css'
import React, { useEffect, useState } from 'react'
import boatMap from '../../static/img/boatMap.svg'
import boatMapSelected from '../../static/img/boatMapSelected.svg'


import L from 'leaflet'


function addMarkers(boatsData, map, setSelectedBoat) {
  for (let i = 0; i < boatsData?.length; i++) {
    let marker = boatsData[i]
    L.marker([marker.position.lat, marker.position.lgn], {
      icon: L.divIcon({
        html: `<div id="iconMap${marker.id}"><img class=${styles.marker} src=${boatMap}><div/><span>${marker.id}</span></div>`,
        className: `${styles.icon}`
      })
    }).addTo(map)
    document
      .querySelector('#iconMap' + (i + 1).toString())
      .addEventListener('click', e => {
        window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth'
        })

        for (let y = 0; y < boatsData?.length; y++) {
          
          document
            .querySelector('#iconMap' + (y + 1).toString())
            .querySelector('img')
            .src = boatMap

          document
            .querySelector('#iconMap' + (y + 1).toString())
            .querySelector('img')
            .classList.remove(styles.bounce);

          if (i === y) {
            document
              .querySelector('#iconMap' + (y + 1).toString())
              .querySelector('img')
              .src = boatMapSelected

            document
              .querySelector('#iconMap' + (y + 1).toString())
              .querySelector('img')
              .classList.add(styles.bounce);
          }
        }
        setSelectedBoat(i)
      })
  }
}


function MapWidget(props) {
  const [map, setMap] = useState()
  const [boatsData, setBoatsData] = useState()

  useEffect(() => {
    setBoatsData(props.boatsData)
  }, [props.boatsData])

  useEffect(() => {
    const createMap = () => {
      if (!map) {
        let a_map = L.map('map', {
          center: [46.15297993956336, -1.1741616281560945],
          zoomControl: false,
          zoom: 12,
          layers: [
            L.tileLayer(
              'https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
              {
                attribution:
                  '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                id: 'satellite-streets-v9',
                accessToken: process.env.REACT_APP_MAPBOX_TOKEN
              }
            )
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
        addMarkers(boatsData, map, props.setSelectedBoat)
        document.querySelector('#iconMap1 > div')?.classList.add(styles.selected)
        let selected = props.setSelectedBoat
        selected(0)
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
