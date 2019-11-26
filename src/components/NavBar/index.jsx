import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { variables as styleVariables } from '../GlobalStyle';

const Nav = styled.nav`
  display: flex;
  font-family: 'Fira Mono', monospace;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const NavList = styled.ul`
  align-items: stretch;
  display: none;
  flex: auto;
  justify-content: flex-end;
  list-style: none;
  margin-bottom: 0;
  padding-inline-start: 0;
  transition: right 500ms;

  &.preshow,
  &.show {
    background: black;
    border: 1px white solid;
    border-radius: 0.25rem;
    border-right: none;
    display: block;
    padding: ${2 * styleVariables.baselinePixels}px 0
      ${2 * styleVariables.baselinePixels}px
      ${2 * styleVariables.baselinePixels}px;
    position: absolute;
    top: ${props => props.navHeight}px;
  }

  &.preshow {
    right: -${props => props.navListWidth}px;
  }

  &.show {
    right: 0px;
  }

  @media (min-width: ${styleVariables.breakpoint.md}px) {
    &,
    &.show {
      background: none;
      display: flex;
      position: static;
    }
  }
`;

const NavItem = styled.li`
  align-items: center;
  display: flex;
  font-size: ${styleVariables.body.xs.rem}rem;
  line-height: ${styleVariables.body.xs.lh};
  margin-left: ${2 * styleVariables.baselinePixels}px;

  .preshow &,
  .show & {
    margin: ${2 * styleVariables.baselinePixels}px 0;

    :first-child {
      margin-top: 0;
    }

    :last-child {
      margin-bottom: 0;
    }
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
  width: ${styleVariables.h1.xs.rem}rem;

  @media (min-width: ${styleVariables.breakpoint.md}px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  border: 1px black solid;
  border-radius: 0.25rem;
  display: block;
  padding: ${2 * styleVariables.baselinePixels - 1}px;
  transition: background 500ms, border-color 500ms;
  width: 100%;

  :focus,
  :hover {
    border: 1px white solid;
  }

  :active,
  &.active {
    background: white;
    color: black;
  }

  .preshow &,
  .show & {
    border-right: none;
  }
`;

export function NavBar({ ...restProps }) {
  const [navListIsShown, setNavListIsShown] = useState(false);
  const navHeight = getNavHeight();
  const navListWidth = getNavListWidth();
  return (
    <Nav {...restProps}>
      <NavListToggle
        onClick={() => {
          const navListElement = document.querySelector('nav > ul');
          if (navListIsShown) {
            navListElement.classList.replace('show', 'preshow');
            setTimeout(() => setNavListIsShown(!navListIsShown), 500);
          } else {
            navListElement.classList.add('preshow');
            setNavListIsShown(!navListIsShown);
          }
        }}
      >
        <FontAwesomeIcon icon={navListIsShown ? faTimes : faBars} />
      </NavListToggle>
      <NavList
        className={navListIsShown && 'show'}
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

function getNavHeight() {
  const navElement = document.querySelector('nav');
  return navElement ? navElement.offsetHeight : null;
}

function getNavListWidth() {
  const navListElement = document.querySelector('nav > ul');
  return navListElement ? navListElement.offsetWidth : null;
}
