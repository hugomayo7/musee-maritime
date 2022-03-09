import image1 from '../../static/img/boat1.png'
import image2 from '../../static/img/boat2.png'

let json = {
    "boatsList": [
        {
            "id": 1,
            "name": "France 1",
            "history": "Le France 1 blablabla",
            "state": 1,
            "stateText": "Montée à bord autorisée",
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
            "tastimonials": {
                "audios": ["https://vttts-eu.readspeaker.com/cgi-bin/nph-voicetext/bba1bb3733664358bb09516d85b35914.mp3"
                ],
                "texts": [
                    "Pour l'avoir visité je confirme, ce bateau en vaux la peine !"
                ],
                "photos": [
                    {
                        "link": "https://cdn.discordapp.com/attachments/948214708006166568/948224426179199016/Cpt_de_frC3A9gate_Leverger.png",
                        "text": "Cette image à été prise en plein océan"
                    }
                ]
            },
            "visits": {
                "week": {
                    "Mercredi":{
                        "max": 10,
                        "actu": 0
                    },
                    "Jeudi":{
                        "max": 10,
                        "actu": 2
                    },
                    "Vendredi":{
                        "max": 10,
                        "actu": 1
                    },
                    "Samedi":{
                        "max": 10,
                        "actu": 10
                    },
                    "Dimanche":{
                        "max": 10,
                        "actu": 6
                    }
                },
                "visitTime": 30
            },
            "position": {
                "lat": 46.151209,
                "lgn": -1.151758
            },
            "image": image1
        },
        {
            "id": 2,
            "name": "Saint-Gilles",
            "history": "Le Saint-Gilles est un remorqueur portuaire et de haute mer construit par les Ateliers et Chantiers de La Rochelle-La Pallice (ACRP) en 1958",
            "state": 0,
            "stateText": "Montée à bord non autorisée",
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
            "tastimonials": {
                "audio": "https://vttts-eu.readspeaker.com/cgi-bin/nph-voicetext/bba1bb3733664358bb09516d85b35914.mp3"
            },
            "position": {
                "lat": 46.152209,
                "lgn": -1.152368
            },
            "image": image2
        }
    ]
}



const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(json);
    }, 7000);
});

export default myPromise;