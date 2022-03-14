let url =
  'https://api.openweathermap.org/data/2.5/onecall?exclude=minutely,hourly&lat=46.160329&lon=-1.151139&lang=fr&units=metric&appid=fca9635413333d26a19d647b42a9acde'

export default async function promise() {
  return fetch(url)
    .then(function (res) {
      if (res.ok) {
        return res.json()
      }
    })
    .then(function (response) {
      let setIcon, setIcon1, setIcon2

      // icon
      switch (response.current.weather[0].main) {
        case 'Clouds':
          setIcon = 'cloudy'
          break
        case 'Clear':
          setIcon = 'day'
          break
        case 'Snow':
          setIcon = 'snowy-6'
          break
        case 'Rain':
          setIcon = 'rainy-6'
          break
        case 'Thunderstorm':
          setIcon = 'thunder'
          break
        default:
      }

      // prevision j+1
      switch (response.daily[0].weather[0].main) {
        case 'Clouds':
          setIcon1 = 'cloudy'
          break
        case 'Clear':
          setIcon1 = 'day'
          break
        case 'Snow':
          setIcon1 = 'snowy-6'
          break
        case 'Rain':
          setIcon1 = 'rainy-6'
          break
        case 'Thunderstorm':
          setIcon1 = 'thunder'
          break
        default:
      }

      // prevision j+2
      switch (response.daily[1].weather[0].main) {
        case 'Clouds':
          setIcon2 = 'cloudy'
          break
        case 'Clear':
          setIcon2 = 'day'
          break
        case 'Snow':
          setIcon2 = 'snowy-6'
          break
        case 'Rain':
          setIcon2 = 'rainy-6'
          break
        case 'Thunderstorm':
          setIcon2 = 'thunder'
          break
        default:
      }

      let json = {
        current: {
          temp: Math.round(response.current.temp),
          currentConditions: (response.current.weather[0].description).charAt(0).toUpperCase() + (response.current.weather[0].description).slice(1),
          icon: setIcon,
          precip: 1,
          humidity: response.current.humidity,
          wind: response.current.wind_speed,
        },
        daily: [
          {
            temp: Math.round(response.daily[0].temp.day),
            currentConditions: (response.daily[0].weather[0].description).charAt(0).toUpperCase() + (response.daily[0].weather[0].description).slice(1),
            icon: setIcon1,
            precip: 1,
            humidity: response.daily[0].humidity,
            wind: response.daily[0].wind_speed,
          },
          {
            temp: Math.round(response.daily[1].temp.day),
            currentConditions: (response.daily[1].weather[0].description).charAt(0).toUpperCase() + (response.daily[1].weather[0].description).slice(1),
            icon: setIcon2,
            precip: 1,
            humidity: response.daily[1].humidity,
            wind: response.daily[1].wind_speed,
          }
        ]
      }

      return json
    })
    .catch(function (err) {
      console.error(err)
      return err
    })
}