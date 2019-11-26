import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { variables as styleVariables } from '../GlobalStyle';

const Brand = styled.div`
  font-size: ${styleVariables.h5.xs.rem}rem;
  line-height: ${styleVariables.h5.xs.lh};
  padding: ${styleVariables.baselinePixels}px 0;
  white-space: nowrap;
  flex: initial;
  transition: filter 500ms;

  :focus {
    filter: drop-shadow(0 0 10px white);
  }

  :hover {
    cursor: pointer;
  }
`;

const Nav = styled.nav`
  background: ${props => (props.isNavListShown ? 'black' : 'none')};
  display: flex;
  font-family: 'Fira Mono', monospace;
  justify-content: space-between;
  transition: background 500ms;

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (min-width: ${styleVariables.breakpoint.md}px) {
    background: none;
  }

`;

const NavList = styled.ul`
  background: black;
  height: calc(100vh - ${props => props.navHeight}px);
  left: 0;
  list-style: none;
  margin-bottom: 0px;
  opacity: 0;
  padding: ${2 * styleVariables.baselinePixels}px;
  position: absolute;
  top: ${props => props.navHeight}px;
  transition: opacity 500ms;
  visibility: hidden;
  width: 100%;

  &.show {
    visibility: visible;
    opacity: 1;
  }

  &.hiding {
    visibility: visible;
    opacity: 0;
  }

  @media (min-width: ${styleVariables.breakpoint.md}px) {
    background: none;
    display: flex;
    height: auto;
    opacity: 1;
    padding: ${styleVariables.baselinePixels}px;
    position: static;
    visibility: visible;
    width: auto;
  }
`;

const NavItem = styled.li`
  font-size: ${styleVariables.h5.xs.rem}rem;
  line-height: ${styleVariables.h5.xs.lh};
  margin-bottom: ${2 * styleVariables.baselinePixels}px;
  text-align: center;

  @media (min-width: ${styleVariables.breakpoint.md}px) {
    margin: 0 0 0 ${2 * styleVariables.baselinePixels}px;
  }
`;

const NavListToggle = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: ${styleVariables.h1.xs.rem}rem;
  line-height: ${styleVariables.h1.xs.lh};
  margin-left: auto;
  padding: ${styleVariables.baselinePixels}px 0;
  transition: filter 500ms;
  width: ${styleVariables.h1.xs.rem}rem;

  :focus {
    filter: drop-shadow(0 0 10px white);
  }

  :hover {
    cursor: pointer;
  }

  @media (min-width: ${styleVariables.breakpoint.md}px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  border: none;
  border-radius: 0.25rem;
  display: block;
  padding: ${2 * styleVariables.baselinePixels}px;
  transition: background 500ms, color 500ms, filter 500ms;

  :focus {
    background: black;
    filter: drop-shadow(0 0 5px white);
  }

  :hover {
    background: white;
    color: black;
  }

  :active,
  &.active {
    border: 1px white solid;
    padding: ${2 * styleVariables.baselinePixels - 1}px;
  }

  @media (min-width: ${styleVariables.breakpoint.md}px) {
    padding: ${styleVariables.baselinePixels}px;

    :active,
    &.active {
      padding: ${styleVariables.baselinePixels - 1}px;
    }
  }
`;

const Tagline = styled.span`
  display: block;
  font-size: ${styleVariables.small.xs.rem}rem;
  line-height: ${styleVariables.small.xs.lh};

  ::before {
    content: '// ';
  }
`;

export function NavBar({ ...restProps }) {
  const [navHeight, setNavHeight] = useState();
  const [isNavListHiding, setisNavListHiding] = useState(false);
  const [isNavListShown, setisNavListShown] = useState(false);
  useEffect(() => {
    getAndSetNavHeight(setNavHeight);
  }, []);
  const navListWidth = getNavListWidth();
  return (
    <Nav isNavListShown={isNavListShown} {...restProps}>
      <Brand as={Link} to="/">
        Nathaniel J. Liberty <br />
        <Tagline>Software Developer</Tagline>
      </Brand>
      <NavListToggle
        onClick={() => {
          if (isNavListShown) {
            setisNavListShown(false);
            setisNavListHiding(true);
            setTimeout(() => {
              setisNavListHiding(false);
            }, 500);
          } else {
            setisNavListShown(true);
          }
        }}
      >
        <FontAwesomeIcon icon={isNavListShown ? faTimes : faBars} />
      </NavListToggle>
      <NavList
        className={`${isNavListShown && 'show'} ${isNavListHiding && 'hiding'}`}
        navHeight={navHeight}
        navListWidth={navListWidth}
      >
        <NavItem>
          <NavLink activeClassName="active" to="/projects">
            Projects
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink activeClassName="active" to="/about">
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink activeClassName="active" to="/contact">
            Contact
          </NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
}

function getAndSetNavHeight(setNavHeight) {
  const navElement = document.querySelector('nav');
  if (navElement) {
    setNavHeight(navElement.offsetHeight);
  }
}

function getNavListWidth() {
  const navListElement = document.querySelector('nav > ul');
  return navListElement ? navListElement.offsetWidth : null;
}
