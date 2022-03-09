let myPromise = new Promise((resolve, reject) => {
  let url = "http://api.openweathermap.org/data/2.5/weather?lat=46.15052608201096&lon=-1.1516173088694917&units=metric&appid=fca9635413333d26a19d647b42a9acde";

  fetch(url).then(function (res) {
    if (res.ok) {
      return res.json();
    }
  }).then(function (response) {
    let setIcon;
    let setCurrentConditions;

    // icon + trad currentConditions
    switch (response.weather[0].main) {
      case 'Clouds':
        setIcon = 'cloudy'
        setCurrentConditions = 'Nuageux'
        break;
      case 'Clear':
        setIcon = 'day'
        setCurrentConditions = 'Dégagé'
        break;
      case 'Snow':
        setIcon = 'snowy-6'
        setCurrentConditions = 'Neige'
        break;
      case 'Rain':
        setIcon = 'rainy-6'
        setCurrentConditions = 'Pluie'
        break;
      case 'Thunderstorm':
        setIcon = 'thunder'
        setCurrentConditions = 'Orageux'
        break;
      default:
    }

    let json = {
      "temp": Math.round(response.main.temp),
      "currentConditions": setCurrentConditions,
      "icon": setIcon,
      "precip": 1,
      "humidity": response.main.humidity,
      "wind": response.wind.speed
    }
    resolve(json)
  }).catch(function (err) {
    console.error(err);
    reject(err)
  });
})

export default myPromise;