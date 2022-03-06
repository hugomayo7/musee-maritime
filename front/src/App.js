import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './layout/Layout'
import HomeView from './views/HomeView'
import BoatsView from './views/BoatsView'
import GalleryView from './views/GalleryView'
import NavbarView from './views/NavbarView'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path='accueil' element={<Navigate replace to='/' />} />
          <Route path='bateaux' element={<BoatsView />} />
          <Route path='gallerie' element={<GalleryView />} />
        </Route>
      </Routes>
      <NavbarView />
    </BrowserRouter>
  )
}

export default App
