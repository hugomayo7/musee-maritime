import image1 from '../../static/img/boat1.png'
import image2 from '../../static/img/boat2.png'
import audio from '../../static/audio/audio1.mp3'

let json = {
  boatsList: [
    {
      id: 1,
      name: 'France 1',
      history:
        'Le France 1 Lorem ipsum dolor sit amet. Ut illum ullam quo enim galisum sed distinctio inventore. Aut minus fugit hic odio itaque aut inventore minus qui officia totam vel dolorum voluptate non aliquid distinctio. Aut quas nobis et harum quia eum quis eaque ut quod autem nam iste enim nam magnam maiores ad saepe dolore. Vel deleniti possimus et unde tempore rem odit aliquid 33 omnis voluptatum.',
      state: 1,
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
            link: audio
          }
        ],
        texts: [
          "Pour l'avoir visité je confirme, ce bateau en vaut la peine !",
          'Ce bateau est incroyable..'
        ],
        photos: [
          {
            link:
              'https://cdn.discordapp.com/attachments/948214708006166568/948224426179199016/Cpt_de_frC3A9gate_Leverger.png',
            text: 'Cette image à été prise en plein océan'
          },
          {
            link:
              'https://cdn.discordapp.com/attachments/948214708006166568/948224426179199016/Cpt_de_frC3A9gate_Leverger.png'
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
        lat: 46.151209,
        lgn: -1.151758
      },
      image: image1,
      images: [
        image1, image2
      ]
    },
    {
      id: 2,
      name: 'Saint-Gilles',
      history:
        'Le Saint-Gilles est un remorqueur portuaire et de haute mer construit par les Ateliers et Chantiers de La Rochelle-La Pallice (ACRP) en 1958',
      state: 0,
      stateText: 'Montée à bord non autorisée',
      characteristics: {
        type: 'remorqueur',
        startYear: '1979',
        materials: 'Acier',
        constructor: 'Ateliers et chantiers de Dieppe',
        initialOwner: 'ARPV',
        initalHarbor: 'La Rochelle',
        collectionEntry: '1981',
        buyPrice: 145000,
        historicMonumentRankDate: '12/03/1987',
        lastRestore: '2001 - 2008'
      },
      tastimonials: {},
      position: {
        lat: 46.152209,
        lgn: -1.152368
      },
      image: image2,
      images: [
        image1, image2
      ]
    }
  ]
}

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(json)
  }, 3000)
})

export default myPromise
