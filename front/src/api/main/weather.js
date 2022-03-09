function getWeatherApi() {
  let url = "http://api.openweathermap.org/data/2.5/weather?lat=46.15052608201096&lon=-1.1516173088694917&units=metric&appid=fca9635413333d26a19d647b42a9acde";

  fetch(url).then(function (res) {
    if (res.ok) {
      return res.json();
    }
  }).then(function (response) {
    let setIcon;
    // console.log(response)

    switch (response.weather[0].main) {
      case 'Clouds':
        setIcon = 'cloudy'
        break;
      case 'Clear':
        setIcon = 'day'
        break;
      case 'Snow':
        setIcon = 'snowy-6'
        break;
      case 'Rain':
        setIcon = 'rainy-6'
        break;
      case 'Thunderstorm':
        setIcon = 'thunder'
        break;
      default:
        setIcon = 'weather'
    }

    let json = {
      "temp": response.main.temp,
      "currentConditions": response.weather[0].main,
      "icon": setIcon,
      "precip": 1,
      "humidity": response.main.humidity,
      "wind": response.wind.speed
    }
    // console.log(json)
    return json;
  }).catch(function (err) {
    console.error(err);
  });
}

export default getWeatherApi();