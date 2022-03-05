import styles from './MuseumStateWidget.module.css'
import myPromise from "../../tests/api/museum";
import {useEffect, useState} from "react";

function MuseumStateWidget () {

    const [state, setState] = useState("Chargement ...")
    const [dotIcon, setDotIcon] = useState(styles.loading)
    const [textType, setTextType] = useState(styles.textLoading)

    useEffect(()=>{
        const fetchData = async () => {
            let results = await myPromise.then((e)=> {
                console.log(e);
                if (e.museum.open) {
                    setState("Musée Ouvert");
                    setDotIcon(styles.open);
                    setTextType(styles.text)
                }
                else {
                    setState("Musée Fermé");
                    setDotIcon(styles.close);
                    setTextType(styles.text)
                }
            })
        }
        fetchData()
    }, [])

  return (
    <div className={`${styles.disposition}`}>
      <div className={`${styles.dot} ${dotIcon}`} />
      <span className={`${textType}`}>{state}</span>
    </div>
  )
}

export default MuseumStateWidget
