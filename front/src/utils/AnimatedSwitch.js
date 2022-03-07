import React from 'react'
import Layout from '../layout/Layout'
import HomeView from '../views/HomeView'
import BoatsView from '../views/BoatsView'
import GalleryView from '../views/GalleryView'
import {Routes, Route, Navigate } from 'react-router-dom'

export default function AnimatedSwitch () {
  return (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path='accueil' element={<Navigate replace to='/' />} />
          <Route path='bateaux' element={<BoatsView />} />
          <Route path='gallerie' element={<GalleryView />} />
        </Route>
      </Routes>
  )
}
