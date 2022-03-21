let json = {
        "meteo": {
            "temp": 21.0,
            "currentConditions": "Nuageux",
            "icon": "cloudy",
            "precip" : 0.1,
            "humidity" : 42.0,
            "wind": 13
        }
    }
;

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(json);
    }, 3000);
});

export default myPromise;