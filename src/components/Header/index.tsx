import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'
import { Container } from './styles'

interface Props {
  toggleTheme(): void
}
const Header: React.FC<Props> = ({ toggleTheme }) => {

  const { colors, title } = useContext(ThemeContext)
  return (
    <Container>
      Colocar uma logo
      <Switch 
      checked={title === 'dark' }
      onChange={toggleTheme}
      checkedIcon={false}
      uncheckedIcon={false}     
      height={10}
      width={40}
      handleDiameter={20}
      offColor={shade(0.15 , colors.primary)}
      onColor={shade(0.15, colors.secundary)}
      />
    </Container>
  )
};

export default Header;