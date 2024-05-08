import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ContainerCard = styled(Link)`
  backdrop-filter: blur(5px) saturate(100%);
  background-color: rgba(37, 37, 40, 0.4);

  border: 1px solid rgba(95, 95, 95, 0.1);

  box-shadow: 0px 0px 11px 0px rgba(105, 105, 105, 0.1);

  border-radius: 0.8rem;

  padding: 0.5rem;

  width: 15.5rem;
  text-decoration: none;
  display: block;

  .infos {
    h3 {
      padding-top: 0.3rem;
    }

    span {
      svg {
        margin-right: 0.2rem;
      }
    }

    p {
      margin: 0.3rem 0 0.8rem;
      font-size: 0.9rem;
    }
  }
`

export const ImagemCard = styled.div`
  img {
    width: 100%;
    height: 100%;

    border-radius: 0.3rem;

    position: relative;
  }

  .tags {
    position: absolute;
    top: 1rem;
    right: 0.7rem;

    span {
      margin-left: 0.3rem;
    }
  }
`
