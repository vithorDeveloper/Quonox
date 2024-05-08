import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { RPG } from './pages/Categorias/RPG'
import { Header } from './components/Header'
import { FPS } from './pages/Categorias/FPS'
import { StyleGlobal } from './style/CSSglobal'
import { Terror } from './pages/Categorias/Terror'
import { Detalhes } from './containers/DetalhesProduto'
import { Esportes } from './pages/Categorias/Esportes'
import { Simulacao } from './pages/Categorias/Simulacao'
import { Estrategia } from './pages/Categorias/Estrategia'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/RPG" element={<RPG />} />
    <Route path="/FPS" element={<FPS />} />
    <Route path="/Terror" element={<Terror />} />
    <Route path="/Esportes" element={<Esportes />} />
    <Route path="/Simulacao" element={<Simulacao />} />
    <Route path="/Estrategia" element={<Estrategia />} />
    <Route path="/Detalhesproduto/:id" element={<Detalhes />} />
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
