fetch('http://localhost:8000/api/boats')
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
            stateText: 'Montée à bord autorisée',
            characteristics: {
                type: 'bateau',
                'année de lancement': '1989',
                matériaux: 'Acier',
                constructeur: 'Ateliers et chantiers de Dieppe',
                'détenteur initial': 'ARPV',
                'port initial': 'La Rochelle',
                'mise en collection': '1993',
                "prix d'achat": 'Private',
                'date du rang de monument historique': '06/06/1993',
                'dernière restoration': '2009 - 2012'
            },
            tastimonials: {
                audios: [
                    {
                        title: 'au son des vagues',
                        link:
                            'https://vttts-eu.readspeaker.com/cgi-bin/nph-voicetext/bba1bb3733664358bb09516d85b35914.mp3'
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
                    Mercredi: {
                        max: 10,
                        actu: 0
                    },
                    Jeudi: {
                        max: 10,
                        actu: 2
                    },
                    Vendredi: {
                        max: 10,
                        actu: 1
                    },
                    Samedi: {
                        max: 10,
                        actu: 10
                    },
                    Dimanche: {
                        max: 10,
                        actu: 6
                    }
                },
                visitTime: 30
            },
            position: {
                lat: response.lat,
                lgn: response.lng
            },
            image: image1,
            images: [image1, image2]
        }
        return json;
    }).catch(function (err) {
        console.error(err)
        return err
    })