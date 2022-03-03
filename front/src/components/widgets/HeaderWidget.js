import MeteoWidget from "./MeteoWidget"
import MuseumStateWidget from "./MuseumStateWidget"

import styles from "./HeaderWidget.module.css"


const HeaderWidget = () => {
    return (
        <div className={`${styles.disposition}`}>
        <MuseumStateWidget/>
        <MeteoWidget/>
        </div>
    )
}

export default HeaderWidget