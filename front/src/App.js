import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout';
import HomeView from './views/HomeView';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomeView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
