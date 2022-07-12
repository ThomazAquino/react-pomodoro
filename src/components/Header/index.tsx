import { Scroll, Timer } from 'phosphor-react'
import { HeaderContainer } from './styles'

import { NavLink } from 'react-router-dom'
import logoTomate from '../../assets/logo-tomate.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoTomate} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
