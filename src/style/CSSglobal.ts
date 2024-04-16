import { createGlobalStyle } from 'styled-components'

const cores = {
  corFundo: '#171a1e',
  hoverTexto: '#bc7725',
  corTexto: '#9a9a9a',
  corTitulo: '#d5d5d5',
  corButton: '#e58e27'
}

export const StyleGlobal = createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: "Rubik", sans-serif;
    background-color: ${cores.corFundo};
    
    h1, h2{
      color: ${cores.corTitulo};
    }

    p{
      color: ${cores.corTexto};
    }

    button{
      background-color: ${cores.corButton};
      color: ${cores.corFundo};

      font-family: "Rubik", sans-serif;
    }
  }
`
