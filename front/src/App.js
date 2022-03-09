import './App.css'
import { BrowserRouter } from 'react-router-dom'
import NavbarView from './views/NavbarView'
import AnimatedSwitch from './utils/AnimatedSwitch'
import fetchBoatsPromise from './tests/api/boats'
import fetchMuseumPromise from './tests/api/museum'
import { useState, useEffect } from 'react'

function App () {
  const [boatsData, setBoatsData] = useState()
  const [museum, setMuseum] = useState({state: -1})

  useEffect(() => {
    const fetchData = async () => {
      await fetchBoatsPromise.then(e => {
        setBoatsData(e.boatsList)
      })
    }
    fetchData()
  }, [setBoatsData])


  useEffect(() => {
    const fetchData = async () => {
      await fetchMuseumPromise.then(e => {
          if (e.museum.open) {
            setMuseum({state:1})
          } else {
            setMuseum({state: 0})
        }
      })
    }

    fetchData()
    // Auto refresh 10sec
    setInterval(() => {
      fetchData()
    }, 10000)
  }, [])


  return (
    <BrowserRouter>
      <AnimatedSwitch boatsData={boatsData} museum={museum} />
      <NavbarView />
    </BrowserRouter>
  )
}

export default App
