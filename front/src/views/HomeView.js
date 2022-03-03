import styles from './HomeView.module.css'

import Header from '../components/Header'
import HeaderWidget from '../components/widgets/HeaderWidget'
import Map from '../components/Map'

const HomeView = () => {
  return (
    <div className={styles.maindiv}>
      <Header />
      <HeaderWidget />
      <Map />
    </div>
  )
}

export default HomeView
