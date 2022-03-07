import './App.css'
import { BrowserRouter} from 'react-router-dom'
import NavbarView from './views/NavbarView'
import AnimatedSwitch from './utils/AnimatedSwitch'

function App () {
  return (
    <BrowserRouter>
    <AnimatedSwitch/>
      <NavbarView />
    </BrowserRouter>
  )
}

export default App
