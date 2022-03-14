import './App.css'
import { BrowserRouter } from 'react-router-dom'
import NavbarView from './views/NavbarView'
import AnimatedSwitch from './utils/AnimatedSwitch'
import fetchBoatsPromise from './api/tests/boats'
import fetchMuseumPromise from './api/tests/museum'
// import fetchMeteoPromise from './api/tests/meteo'
import { useState, useEffect } from 'react'
import fetchWeatherPromise from './api/main/weather'

function App() {
  const [boatsData, setBoatsData] = useState()
  const [museum, setMuseum] = useState({ state: -1 })
  const [meteo, setMeteo] = useState({ state: -1, data: {} })

  useEffect(() => {
    const fetchData = async () => {
      await fetchBoatsPromise.then(e => {
        setBoatsData(e.boatsList)
      })
    }
    fetchData()

    setInterval(() => {
      fetchData()
    }, 10000)
  }, [setBoatsData])

  useEffect(() => {
    const fetchData = async () => {
      await fetchMuseumPromise.then(e => {
        if (e.museum.open) {
          setMuseum({ state: 1 })
        } else {
          setMuseum({ state: 0 })
        }
      })
    }

    fetchData()
    // Auto refresh 10sec
    setInterval(() => {
      fetchData()
    }, 10000)
  }, [setMuseum])

  useEffect(() => {
    const fetchData = async () => {
      await fetchWeatherPromise().then(e => {
        setMeteo({
          state: 1,
          data: {
            temp: e.current.temp,
            conditions: e.current.currentConditions,
            icon:
              'https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/' +
              e.current.icon +
              '.svg',
            daily: [
              {
                temp: e.daily[0].temp,
                conditions: e.daily[0].currentConditions,
                icon: 'https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/' +
                  e.daily[0].icon +
                  '.svg',
              },
              {
                temp: e.daily[1].temp,
                conditions: e.daily[1].currentConditions,
                icon: 'https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/' +
                  e.daily[1].icon +
                  '.svg',
              }
            ]
          }
        })
      })
    }
    fetchData()

    setInterval(() => {
      fetchData()
    }, 30000)
  }, [setMeteo])

  return (
    <BrowserRouter>
      <AnimatedSwitch boatsData={boatsData} museum={museum} meteo={meteo} />
      <NavbarView />
    </BrowserRouter>
  )
}


export default App
