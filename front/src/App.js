import './App.css'
import { BrowserRouter } from 'react-router-dom'
import NavbarView from './views/NavbarView'
import AnimatedSwitch from './utils/AnimatedSwitch'
import fetchBoatsPromise from './tests/api/boats'
import { useState, useEffect } from 'react'

function App () {
  const [boatsData, setBoatsData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      await fetchBoatsPromise.then(e => {
        setBoatsData(e.boatsList)
      })
    }
    fetchData()
  }, [setBoatsData])

  return (
    <BrowserRouter>
      <AnimatedSwitch boatsData={boatsData} />
      <NavbarView />
    </BrowserRouter>
  )
}

export default App
