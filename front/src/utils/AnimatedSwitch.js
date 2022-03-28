import React from 'react'
import Layout from '../layout/Layout'
import HomeView from '../views/HomeView'
import BoatsView from '../views/BoatsView'
import GalleryView from '../views/GalleryView'
import BoatDetailsView from '../views/BoatDetailsView'
import { Routes, Route, Navigate } from 'react-router-dom'
import WeatherView from '../views/WeatherView'

export default function AnimatedSwitch(props) {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomeView boatsData={props?.boatsData} museum={props?.museum} meteo={props?.meteo} />} />
        <Route path='accueil' element={<Navigate replace to='/' />} />
        <Route
          path='bateaux'
          element={<BoatsView boatsData={props?.boatsData} />}
        />
        <Route
          path='galerie'
          element={<GalleryView boatsData={props?.boatsData} />}
        />
        <Route
          path='bateaux/:id'
          element={<BoatDetailsView boatsData={props?.boatsData} />}
        />
        <Route
          path='meteo'
          element={<WeatherView meteo={props?.meteo} />}
        />
      </Route>
    </Routes>
  )
}
