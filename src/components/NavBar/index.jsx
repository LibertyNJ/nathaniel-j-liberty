import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { variables as styleVariables } from '../GlobalStyle';

const Brand = styled.div`
  font-size: ${styleVariables.h5.xs.rem}rem;
  line-height: ${styleVariables.h5.xs.lh};
  padding: ${styleVariables.baselinePixels}px 0;
  white-space: nowrap;
`;
const Tagline = styled.span`
  display: block;
  font-size: ${styleVariables.small.xs.rem}rem;
  line-height: ${styleVariables.small.xs.lh};
  ::before {
    content: '// ';
  }
`;
const Nav = styled.nav`
  display: flex;
  font-family: 'Fira Mono', monospace;
  a {
    color: inherit;
    text-decoration: none;
  }
`;
const NavItems = styled.ul`
  align-items: stretch;
  display: none;
  flex: auto;
  justify-content: flex-end;
  list-style: none;
  padding-inline-start: 0;
  transition: right 500ms;

  &.preshow {
    background: black;
    border: 1px white solid;
    border-radius: 0.25rem;
    border-right: none;
    display: block;
    padding: ${2 * styleVariables.baselinePixels}px 0
      ${2 * styleVariables.baselinePixels}px
      ${2 * styleVariables.baselinePixels}px;
    position: absolute;
    right: -${props => props.navItemsWidth}px;
    top: ${props => props.navHeight}px;
  }
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
    right: 0px;
    top: ${props => props.navHeight}px;
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
const NavItemsToggle = styled.button`
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
  const [navItemsAreShown, setNavItemsAreShown] = useState(false);
  const navHeight = getNavHeight();
  const navItemsWidth = getNavItemsWidth();
  return (
    <Nav {...restProps}>
      {/* <Link to="/">
        <Brand>
          Nathaniel J. Liberty <br />
          <Tagline>Software Developer</Tagline>
        </Brand>
      </Link> */}
      {/* <NavItemsToggle
        onClick={() => {
          setNavItemsAreShown(!navItemsAreShown);
        }}
      > */}
      <NavItemsToggle
        onClick={() => {
          const navItems = document.querySelector('nav > ul');
          if (navItemsAreShown) {
            navItems.classList.replace('show', 'preshow');
            setTimeout(() => setNavItemsAreShown(!navItemsAreShown), 500);
          } else {
            navItems.classList.add('preshow');
            setNavItemsAreShown(!navItemsAreShown);
          }
        }}
      >
        <FontAwesomeIcon icon={navItemsAreShown ? faTimes : faBars} />
      </NavItemsToggle>
      <NavItems
        className={navItemsAreShown && 'show'}
        navHeight={navHeight}
        navItemsWidth={navItemsWidth}
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
      </NavItems>
    </Nav>
  );
}

function getNavHeight() {
  const navElement = document.querySelector('nav');
  return navElement ? navElement.offsetHeight : null;
}

function getNavItemsWidth() {
  const navItemsElement = document.querySelector('nav > ul');
  return navItemsElement ? navItemsElement.offsetWidth : null;
}
