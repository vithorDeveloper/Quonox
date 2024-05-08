import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;

  section {
    position: relative;
    margin-top: 2rem;

    img {
      position: absolute;
      bottom: -9rem;
      left: 5rem;

      border-radius: 0.3rem;

      box-shadow: 0px 0px 11px 0px rgba(105, 105, 105, 0.1);
    }

    .containInfos {
      width: 70%;

      text-align: right;

      p {
        padding: 0.3rem 0;

        span:first-child {
          opacity: 0.6;

          text-decoration: line-through;

          display: block;
        }
      }
    }
  }

  .descricao {
    width: 70%;
    height: 145px;

    float: right;

    padding: 0.8rem 0.5rem;
  }

  .videos {
    margin-top: 13rem;

    display: flex;
    justify-content: space-between;
  }
`
