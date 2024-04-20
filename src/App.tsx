import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StyleGlobal } from './style/CSSglobal'
import { Header } from './components/Header'
import { Home } from './pages/Home'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

function App() {
  return (
    <>
      <StyleGlobal />
      <Header />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
