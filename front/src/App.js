import './App.css'
import { BrowserRouter } from 'react-router-dom'
import NavbarView from './views/NavbarView'
import AnimatedSwitch from './utils/AnimatedSwitch'
import fetchBoatsPromise from './api/main/boats'
import fetchMuseumPromise from './api/main/museum'
import { useState, useEffect } from 'react'
import fetchWeatherPromise from './api/main/weather'

function App () {
  const [boatsData, setBoatsData] = useState()
  const [museum, setMuseum] = useState({ state: -1 })
  const [meteo, setMeteo] = useState({ state: -1, data: {} })

  useEffect(() => {
    const fetchData = async () => {
      await fetchBoatsPromise().then(e => {
        setBoatsData(e.boatsList)
      })
    }
    fetchData()

    setInterval(() => {
      fetchData()
    }, 100000)
  }, [setBoatsData])

  useEffect(() => {
    const fetchData = async () => {
      await fetchMuseumPromise().then(e => {
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
    }, 300000)
  }, [setMuseum])

  useEffect(() => {
    const fetchData = async () => {
      await fetchWeatherPromise().then(e => {
        setMeteo({
          state: 1,
          data: {
            daily: [
              {
                temp: e.daily[0].temp,
                conditions: e.daily[0].currentConditions,
                humidity: e.daily[0].humidity,
                wind: e.daily[0].wind,
                icon:
                  'https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/' +
                  e.daily[0].icon +
                  '.svg'
              },
              {
                temp: e.daily[1].temp,
                precip: e.daily[1].precip,
                humidity: e.daily[1].humidity,
                wind: e.daily[1].wind,
                conditions: e.daily[1].currentConditions,
                icon:
                  'https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/' +
                  e.daily[1].icon +
                  '.svg'
              },
              {
                temp: e.daily[2].temp,
                precip: e.daily[2].precip,
                humidity: e.daily[2].humidity,
                wind: e.daily[2].wind,
                conditions: e.daily[2].currentConditions,
                icon:
                  'https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/' +
                  e.daily[2].icon +
                  '.svg'
              }
            ]
          }
        })
      })
    }
    fetchData()

    setInterval(() => {
      fetchData()
    }, 300000)
  }, [setMeteo])

  return (
    <BrowserRouter>
      <AnimatedSwitch boatsData={boatsData} museum={museum} meteo={meteo} />
      <NavbarView />
    </BrowserRouter>
  )
}

export default App

