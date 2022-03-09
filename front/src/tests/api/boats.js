import image1 from '../../static/img/boat1.png'
import image2 from '../../static/img/boat2.png'

let json = {
  boatsList: [
    {
      id: 0,
      name: 'Angoumois',
      historic: "L'angoumois est un beateau..",
      open: 1,
      openText: 'Montée à bord autorisée',
      image: image1,
      position: {
        x: 46.153059,
        y: -1.151814
      }
    },
    {
      id: 1,
      name: 'Saint-Gilles',
      historic:
        'Le Saint-Gilles est un remorqueur portuaire et de haute mer construit par les Ateliers et Chantiers de La Rochelle-La Pallice (ACRP) en 1958',
      open: 0,
      openText: 'Fermé',
      image: image2,
      position: {
        x: 46.15128,
        y: -1.151834
      }
    }
  ]
}

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(json)
  }, 100)
})

export default myPromise
