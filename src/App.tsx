import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StyleGlobal } from './style/CSSglobal'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { RPG } from './pages/Categorias/RPG'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/RPG" element={<RPG />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <StyleGlobal />
      <Header />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
