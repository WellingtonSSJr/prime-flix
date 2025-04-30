import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Filme from './pages/Filme/Filme'
import Header from './components/Header/Header'
import Sobre from './pages/Sobre/Sobre'
import Favoritos from './pages/Favoritos/Favoritos'


function RoutesApp() {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/filme/:id' element={<Filme/>} />
            <Route path='/sobre' element={<Sobre/>} />
            <Route path='/favoritos' element={<Favoritos/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp
