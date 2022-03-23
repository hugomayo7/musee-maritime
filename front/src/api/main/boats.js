export default async function promise() {
    return fetch('http://localhost:8000/api/boats')
        .then(function (res) {
            if (res.ok) {
                return res.json()
            }
        })
        .then(function (response) {
            console.log(response)

            let json = {
                name: response['hydra:member'][0].name,
                history: response['hydra:member'][0].historic,
                state: response['hydra:member'][0].state,
                stateText: response['hydra:member'][0].stateText,
                characteristics: {
                    'année de lancement': response['hydra:member'][0].characteristics.startYear,
                    matériaux: response['hydra:member'][0].characteristics.material,
                    'détenteur initial': response['hydra:member'][0].characteristics.initialOwner,
                    'port initial': response['hydra:member'][0].characteristics.initialHarbor,
                    'mise en collection': response['hydra:member'][0].characteristics.collectionEntry,
                    "prix d'achat": response['hydra:member'][0].characteristics.buyPrice,
                    'date du rang de monument historique': response['hydra:member'][0].characteristics.historicMonumentRankDate,
                    'dernière restoration': response['hydra:member'][0].characteristics.restore
                },
                tastimonials: {
                    audios: [
                        {
                            link: response['hydra:member'][0].audio
                        }
                    ],
                    texts: [
                        "Pour l'avoir visité je confirme, ce bateau en vaut la peine !"
                    ],
                    photos: [
                        {
                            link:
                                'https://cdn.discordapp.com/attachments/948214708006166568/948224426179199016/Cpt_de_frC3A9gate_Leverger.png',
                            text: 'Cette image à été prise en plein océan'
                        }
                    ]
                },
                visits: {
                    week: {
                        Lundi: {
                            max: response['hydra:member'][0].visits[0].maximumPlaces,
                            actu: response['hydra:member'][0].visits[0].actual
                        },
                        Mardi: {
                            max: response['hydra:member'][0].visits[0].maximumPlaces,
                            actu: response['hydra:member'][0].visits[0].actual
                        },
                        Mercredi: {
                            max: response['hydra:member'][0].visits[0].maximumPlaces,
                            actu: response['hydra:member'][0].visits[0].actual
                        },
                        Jeudi: {
                            max: response['hydra:member'][0].visits[0].maximumPlaces,
                            actu: response['hydra:member'][0].visits[0].actual
                        },
                        Vendredi: {
                            max: response['hydra:member'][0].visits[0].maximumPlaces,
                            actu: response['hydra:member'][0].visits[0].actual
                        },
                        Samedi: {
                            max: response['hydra:member'][0].visits[0].maximumPlaces,
                            actu: response['hydra:member'][0].visits[0].actual
                        },
                        Dimanche: {
                            max: response['hydra:member'][0].visits[0].maximumPlaces,
                            actu: response['hydra:member'][0].visits[0].actual
                        }
                    },
                    visitTime: response['hydra:member'][0].visits[0].visitTime
                },
                position: {
                    lat: response['hydra:member'][0].lat,
                    lgn: response['hydra:member'][0].lng
                },
                image: response['hydra:member'][0].image,
                images: response['hydra:member'][0].images.map((el) => { return el.image })
            }
            return json;
        }).catch(function (err) {
            console.error(err)
            return err
        })
}