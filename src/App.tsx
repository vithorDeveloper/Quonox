import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StyleGlobal } from './style/CSSglobal'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { RPG } from './pages/Categorias/RPG'
import { Esportes } from './pages/Categorias/Esportes'
import { Simulacao } from './pages/Categorias/Simulacao'
import { Estrategia } from './pages/Categorias/Estrategia'
import { FPS } from './pages/Categorias/FPS'
import { Acao } from './pages/Categorias/Acao'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/RPG" element={<RPG />} />
    <Route path="/FPS" element={<FPS />} />
    <Route path="/Acao" element={<Acao />} />
    <Route path="/Esportes" element={<Esportes />} />
    <Route path="/Simulacao" element={<Simulacao />} />
    <Route path="/Estrategia" element={<Estrategia />} />
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
