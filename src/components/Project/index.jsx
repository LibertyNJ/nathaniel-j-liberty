import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Div = styled.div``;
const GitHubLink = styled.a``;
const LiveLink = styled.a``;
const ProjectTitle = styled.h2``;

Project.propTypes = {
  children: PropTypes.node.isRequired,
  githubSlug: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
  liveUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default function Project({
  children,
  githubSlug,
  image,
  liveUrl,
  name,
  ...restProps
}) {
  return (
    <Div {...restProps}>
      <ProjectTitle>{name}</ProjectTitle>
      {image}
      <GitHubLink
        href={`https://github.com${githubSlug}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon icon={faGithub} /> Visit GitHub repository{' '}
        <FontAwesomeIcon icon={faExternalLinkAlt} />
      </GitHubLink>
      <LiveLink href={liveUrl} rel="noopener noreferrer" target="_blank">
        Visit live project <FontAwesomeIcon icon={faExternalLinkAlt} />
      </LiveLink>
      {children}
    </Div>
  );
}
