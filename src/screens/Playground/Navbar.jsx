import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaLightbulb, FaMoon } from 'react-icons/fa'
import { ThemeContext } from '../../context/ThemeContext'

const StyledNavbar = styled.div`
  height: 4.5rem;
  background: var(--secondary-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  @media (max-width: 768px){
    padding: 0 1rem;
  }
`

const Logo = styled.div`
  color: white;
  font-size: 2rem;
  font-weight: 700;
`

const NavbarButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const ThemeToggle = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`

const Button = styled.button`
  padding: 0.7rem 1.2rem;
  background: white;
  color: black;
  border: none;
  border-radius: 32px;
  font-weight: 700;
  cursor: pointer;
`

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <StyledNavbar>
      <Link to="/">
        <Logo>Code Deck</Logo>
      </Link>
      <NavbarButtons>
        <ThemeToggle onClick={toggleDarkMode}>
          {isDarkMode ? <FaLightbulb /> : <FaMoon />}
        </ThemeToggle>
        <a href="https://github.com/yourusername/code-deck" target="_blank" rel="noreferrer">
          <Button>GitHub</Button>
        </a>
      </NavbarButtons>
    </StyledNavbar>
  )
}

export default Navbar