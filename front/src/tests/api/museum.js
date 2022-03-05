export let json = {
        "museum": {
            "open": true,
        }
    };

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(json);
    }, 2000);
});

export default myPromise;