import image1 from '../../static/img/boat1.png'
import image2 from '../../static/img/boat2.png'

let json = {
        boatsList: [
        {
            id:0,
            name:"Angoumois",
            desc:"L'angoumois est un beateau..",
            type:"cocopops",
            open:1,
            openText: "Montée à bord autorisée",
            image: image1
        },
        {
            id:1,
            name:"Saint-Gilles",
            desc:"Le Saint-Gilles est un remorqueur portuaire et de haute mer construit par les Ateliers et Chantiers de La Rochelle-La Pallice (ACRP) en 1958",
            type:"remorqueur",
            open:0,
            openText: "Fermé",
            image: image2
        }       
        ]
    }

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(json);
    }, 8000);
});

export default myPromise;