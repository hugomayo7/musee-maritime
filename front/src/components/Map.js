import styles from "./Map.module.css"

import BoatWidget from "./widgets/BoatWidget";
import MapWidget from "./widgets/MapWidget";

function Map() {
    return ( 
        <div className={`${styles.disposition}`}>
        <MapWidget/>
        <BoatWidget/>
        </div>
     );
}

export default Map;