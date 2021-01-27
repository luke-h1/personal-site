// @ts-ignore
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import styled, { ThemeProvider } from 'styled-components';
import {
  NavWrapper,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
} from './NavStyles';

const NavBtnLink = styled.a`
  color: #000;
`;

const Nav = ({ theme }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavWrapper>
          <NavbarContainer>
            <NavLogo href="/" onClick={closeMobileMenu}>
              <NavIcon />
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks href="/" onClick={closeMobileMenu}>
                  <a data-testid="home">Home</a>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks href="/about" onClick={closeMobileMenu}>
                  <a data-testid="about">About</a>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks href="/projects" onClick={closeMobileMenu}>
                  <a data-testid="project">Projects</a>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks href="/blog" onClick={closeMobileMenu}>
                  <a data-testid="blog">Blog</a>
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {' '}
                <NavBtnLink href="test" />
              </NavItemBtn>
              <NavItemBtn />
            </NavMenu>
          </NavbarContainer>
        </NavWrapper>
      </ThemeProvider>
    </>
  );
};

export default Nav;
