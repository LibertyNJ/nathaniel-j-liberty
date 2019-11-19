import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Brand = styled.div`
  padding: 0.5rem 1rem;
  white-space: nowrap;
`;
const Tagline = styled.span`
  font-size: 0.8rem;
  vertical-align: top;
  ::before {
    content: '// ';
  }
`;
const Navigation = styled.nav`
  display: flex;
  font-family: 'Fira Mono', monospace;
  a {
    color: inherit;
    text-decoration: none;
  }
`;
const NavigationItems = styled.ul`
  align-items: stretch;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  list-style: none;
`;
const NavigationItem = styled.li`
  align-items: center;
  display: flex;
  margin: 0 1rem;
`;
const NavigationLink = styled(Link)`
  border-color: black;
  border-radius: 0.25rem;
  display: block;
  padding: 1rem;
  transition: background 500ms, border-color 500ms;
  :focus,
  :hover {
    border: 1px white solid;
    padding: calc(1rem - 1px);
  }
  :active,
  &.active {
    background: white;
    color: black;
  }
`;

export function NavigationBar({ ...restProps }) {
  return (
    <Navigation {...restProps}>
      <Brand>
        <Link to="/">
          Nathaniel J. Liberty <br />
          <Tagline>Software Developer</Tagline>
        </Link>
      </Brand>
      <NavigationItems>
        <NavigationItem>
          <NavigationLink activeClassName="active" to="/projects">
            Projects
          </NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink activeClassName="active" to="/about">
            About
          </NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink activeClassName="active" to="/contact">
            Contact
          </NavigationLink>
        </NavigationItem>
      </NavigationItems>
    </Navigation>
  );
}
