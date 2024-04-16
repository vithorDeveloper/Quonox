import { StyleGlobal, Container } from './style/CSSglobal'
import { Header } from './components/Header'
import { NavBar } from './containers/Navbar'
import { Content } from './containers/Content'

function App() {
  return (
    <>
      <StyleGlobal />
      <Header />
      <Container>
        <NavBar />
        <Content />
      </Container>
    </>
  )
}

export default App
