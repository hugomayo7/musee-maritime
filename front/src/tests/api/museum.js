let json = {
        "museum": {
            "open": Math.floor(Math.random() * 2) + 0,
        }
    };

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(json); 
    }, 4000);
});

export default myPromise;