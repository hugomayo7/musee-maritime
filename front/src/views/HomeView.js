import styles from './HomeView.module.css'

import Header from '../components/Header'
import HeaderWidget from '../components/widgets/HeaderWidget'
import Map from '../components/Map'
import MuseumStateWidget from '../components/widgets/MuseumStateWidget'
import MeteoWidget from '../components/widgets/MeteoWidget'

const HomeView = () => {
  const widgets = [(<MuseumStateWidget key={1} />), (<MeteoWidget key={2} />)]

  return (
    <div className={styles.maindiv}>
      <Header title={"Bassin à flot : histoire et témoignages"}/>
      <HeaderWidget widgets={widgets} />
      <Map />
    </div>
  )
}

export default HomeView
