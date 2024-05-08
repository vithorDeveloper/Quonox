import { ArrowLeft } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

export const ButtonVoltar = () => (
  <Link to="/" style={{ color: '#d5d5d5' }}>
    <ArrowLeft size={30} />
  </Link>
)
