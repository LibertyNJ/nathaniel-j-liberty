import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { baseline, breakpoint, color, typography } from '../style';

const BORDER_THICKNESS = '1px';
const TRANSITION_DURATION = '500ms';

const Brand = styled.div`
  font-size: ${typography.fontSize.h5.xs};
  line-height: ${typography.lineHeight.h5.xs};
  padding: calc(3 * ${baseline}) 0;
  white-space: nowrap;
  flex: initial;
  transition: filter ${TRANSITION_DURATION};

  :focus {
    filter: drop-shadow(0 0 10px ${color.white});
  }

  :hover {
    cursor: pointer;
  }
`;

const Nav = styled.nav`
  background: ${props => (props.listIsShown ? color.black : 'none')};
  display: flex;
  font-family: ${typography.font.monospace};
  justify-content: space-between;
  transition: background ${TRANSITION_DURATION};

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (min-width: ${breakpoint.md}) {
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
  padding: calc(6 * ${baseline});
  position: absolute;
  top: ${props => props.navHeight}px;
  transition: opacity ${TRANSITION_DURATION};
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

  @media (min-width: ${breakpoint.md}) {
    background: none;
    display: flex;
    height: auto;
    opacity: 1;
    padding: calc(3 * ${baseline});
    position: static;
    visibility: visible;
    width: auto;
  }
`;

const NavItem = styled.li`
  font-size: ${typography.fontSize.h5.xs};
  line-height: ${typography.lineHeight.h5.xs};
  margin-bottom: calc(6 * ${baseline});
  text-align: center;

  @media (min-width: ${breakpoint.md}) {
    margin: 0 0 0 calc(6 * ${baseline});
  }
`;

const NavListToggle = styled.button`
  background: none;
  border: none;
  color: ${color.white};
  font-size: ${typography.fontSize.h1.xs};
  line-height: ${typography.lineHeight.h1.xs};
  margin-left: auto;
  padding: calc(3 * ${baseline}) 0;
  transition: filter ${TRANSITION_DURATION};
  width: ${typography.fontSize.h1.xs};

  :focus {
    filter: drop-shadow(0 0 10px ${color.white});
  }

  :hover {
    cursor: pointer;
  }

  @media (min-width: ${breakpoint.md}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  border: none;
  border-radius: ${baseline};
  display: block;
  padding: calc(6 * ${baseline});
  transition: background ${TRANSITION_DURATION}, color ${TRANSITION_DURATION},
    filter ${TRANSITION_DURATION};

  :focus {
    background: ${color.black};
    filter: drop-shadow(0 0 5px ${color.white});
  }

  :hover {
    background: ${color.white};
    color: ${color.black};
  }

  :active,
  &.active {
    border: ${BORDER_THICKNESS} ${color.white} solid;
    padding: calc(6 * ${baseline} - ${BORDER_THICKNESS});
  }

  @media (min-width: ${breakpoint.md}) {
    padding: calc(3 * ${baseline});

    :active,
    &.active {
      padding: calc(3 * ${baseline} - ${BORDER_THICKNESS});
    }
  }
`;

const Tagline = styled.span`
  display: block;
  font-size: ${typography.fontSize.small.xs};
  line-height: ${typography.lineHeight.small.xs};

  ::before {
    content: '// ';
  }
`;

export default function NavBar({ ...restProps }) {
  const [navHeight, setNavHeight] = useState();
  const [navListIsHiding, setNavListIsHiding] = useState(false);
  const [navListIsShown, setNavListIsShown] = useState(false);

  useEffect(() => getAndSetNavHeight(setNavHeight), []);

  return (
    <Nav listIsShown={navListIsShown} {...restProps}>
      <Brand as={Link} to="/">
        Nathaniel J. Liberty <br />
        <Tagline>Full-Stack Web Developer</Tagline>
      </Brand>
      <NavListToggle
        onClick={() => {
          if (navListIsShown) {
            setNavListIsShown(false);
            setNavListIsHiding(true);

            setTimeout(() => {
              setNavListIsHiding(false);
            }, TRANSITION_DURATION.match(/\d*/)[0]);
          } else {
            setNavListIsShown(true);
          }
        }}
      >
        <FontAwesomeIcon icon={navListIsShown ? 'times' : 'bars'} />
      </NavListToggle>
      <NavList
        className={`${navListIsShown && 'show'} ${navListIsHiding && 'hiding'}`}
        navHeight={navHeight}
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
