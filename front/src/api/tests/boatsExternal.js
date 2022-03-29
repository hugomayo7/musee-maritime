fetch('http://localhost:8000/api/boats')
  .then(function (res) {
    if (res.ok) {
      return res.json()
    }
  })
  .then(function (response) {
    let json = {
      boatsList: []
    }


    for (let i = 0; i < response['hydra:member'].length; i++) {
      let el = response['hydra:member'][i]
      let _ = {
        id: el['@id'].replace('/api/boats/', ''),
        name: el.name,
        history: el.historic,
        state: el.state,
        stateText: el.stateText,
        characteristics: {
          'année de lancement': el.characteristics.startYear,
          matériaux: el.characteristics.material,
          'détenteur initial': el.characteristics.initialOwner,
          'port initial': el.characteristics.initialHarbor,
          'mise en collection': el.characteristics.collectionEntry,
          "prix d'achat": el.characteristics.buyPrice,
          'date du rang de monument historique':
            el.characteristics.historicMonumentRankDate,
          'dernière restoration': el.characteristics.restore
        },
        tastimonials: {
          audios: [
            {
              title: el.audio.title,
              link: el.audio.file
            }
          ],
          texts: [el.texts.map((text) => {return text.testimony})],
          photos: [
            el.images.map(image => {
              return { link: image.image, text: image.description }
            })
          ]
        },
        visits: {
          week: {
            Lundi: {
              max: el.visits.filter(visit => {
                if (visit.day === 'lundi') {
                  return true
                }
                return false
              }).maximumPlaces,
              actu: el.visits.filter(visit => {
                if (visit.day === 'lundi') {
                  return true
                }
                return false
              }).actual
            },
            Mardi: {
              max: el.visits.filter(visit => {
                if (visit.day === 'mardi') {
                  return true
                }
                return false
              }).maximumPlaces,
              actu: el.visits.filter(visit => {
                if (visit.day === 'mardi') {
                  return true
                }
                return false
              }).actual
            },
            Mercredi: {
              max: el.visits.filter(visit => {
                if (visit.day === 'mercredi') {
                  return true
                }
                return false
              }).maximumPlaces,
              actu: el.visits.filter(visit => {
                if (visit.day === 'mercredi') {
                  return true
                }
                return false
              }).actual
            },
            Jeudi: {
              max: el.visits.filter(visit => {
                if (visit.day === 'jeudi') {
                  return true
                }
                return false
              }).maximumPlaces,
              actu: el.visits.filter(visit => {
                if (visit.day === 'jeudi') {
                  return true
                }
                return false
              }).actual
            },
            Vendredi: {
              max: el.visits.filter(visit => {
                if (visit.day === 'vendredi') {
                  return true
                }
                return false
              }).maximumPlaces,
              actu: el.visits.filter(visit => {
                if (visit.day === 'vendredi') {
                  return true
                }
                return false
              }).actual
            },
            Samedi: {
              max: el.visits.filter(visit => {
                if (visit.day === 'samedi') {
                  return true
                }
                return false
              }).maximumPlaces,
              actu: el.visits.filter(visit => {
                if (visit.day === 'samedi') {
                  return true
                }
                return false
              }).actual
            },
            Dimanche: {
              max: el.visits.filter(visit => {
                if (visit.day === 'dimanche') {
                  return true
                }
                return false
              }).maximumPlaces,
              actu: el.visits.filter(visit => {
                if (visit.day === 'dimanche') {
                  return true
                }
                return false
              }).actual
            }
          },
          visitTime: el.visits[0].visitTime
        },
        position: {
          lat: el.lat,
          lgn: el.lng
        },
        image: el.image,
        images: el.images.map(image => {
          return image.image
        })
      }
      json.boatsList.push(_)
    }

    return json
  })
  .catch(function (err) {
    console.error("Erreur : ", err)
    return err
  })
