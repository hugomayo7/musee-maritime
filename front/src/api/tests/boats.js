import image1 from '../../static/img/boat1.png'
import image2 from '../../static/img/boat2.png'

let json = {
    "boatsList": [
        {
            "id": 1,
            "name": "France 1",
            "historique": "Le France 1 blablabla",
            "open": 1,
            "openText": "Montée à bord autorisée",
            "characteristics": {
                "type": "bateau",
                "startYear": "1989",
                "materials" : "Acier",
                "constructor": "Ateliers et chantiers de Dieppe",
                "initialOwner": "ARPV",
                "initalHarbor": "La Rochelle",
                "collectionEntry": "1993",
                "buyPrice": "Private",
                "historicMonumentRankDate": "06/06/1993",
                "lastRestore": "2009 - 2012"
            },
            "audio": "https://vttts-eu.readspeaker.com/cgi-bin/nph-voicetext/7e793d26c12d4915b0e62eb87327ea6a.mp3",
            "image": image1,
            "position": {
                "x": 46.151209,
                "y": -1.151758
            }
        },
        {
            "id": 2,
            "name": "Saint-Gilles",
            "historique": "Le Saint-Gilles est un remorqueur portuaire et de haute mer construit par les Ateliers et Chantiers de La Rochelle-La Pallice (ACRP) en 1958",
            "open": 1,
            "openText": "Montée à bord autorisée",
            "characteristics": {
                "type": "remorqueur",
                "startYear": "1979",
                "materials" : "Acier",
                "constructor": "Ateliers et chantiers de Dieppe",
                "initialOwner": "ARPV",
                "initalHarbor": "La Rochelle",
                "collectionEntry": "1981",
                "buyPrice": 145000,
                "historicMonumentRankDate": "12/03/1987",
                "lastRestore": "2001 - 2008"
            },
            "audio": "https://vttts-eu.readspeaker.com/cgi-bin/nph-voicetext/bba1bb3733664358bb09516d85b35914.mp3",
            "image": image2,
            "position": {
                "x": 46.241209,
                "y": -1.511758
            }
        }
    ]
}


const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(json);
    }, 7000);
});

export default myPromise;