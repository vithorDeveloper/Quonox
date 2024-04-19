import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
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
    text-decoration: none;
    list-style: none;
  }

  body{
    font-family: "Rubik", sans-serif;

    background-color: ${cores.corFundo};
    color: ${cores.corTexto};

    padding: 0 .5rem;
    
    h1, h2, h3{
      color: ${cores.corTitulo};
    }

    button{
      background-color: ${cores.corButton};
      color: ${cores.corFundo};

      font-family: "Rubik", sans-serif;
    }
  }
`
export const Container = styled.main`
  width: 1024px;

  margin: 0 auto;
  padding: 1rem 0;

  display: grid;
  grid-template-columns: 12rem auto;
  column-gap: 2rem;
`
