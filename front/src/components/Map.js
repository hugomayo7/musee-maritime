import { useState } from "react";
import styles from "./Map.module.css"

import BoatWidget from "./widgets/BoatWidget";
import MapWidget from "./widgets/MapWidget";

function Map() {
    const [selectedBoat, setSelectedBoat] = useState()

    return ( 
        <div className={`${styles.disposition}`}>
        <MapWidget setSelectedBoat={setSelectedBoat}/>
        <BoatWidget selectedBoat={selectedBoat}/>
        </div>
     );
}

export default Map;