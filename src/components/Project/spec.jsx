import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup, render } from '@testing-library/react';

import Project from './index';

afterEach(cleanup);

describe('<Project githubSlug={string} image={} liveUrl={string} name={string}>{children}</Project>', () => {
  test('Renders passed children.', () => {
    const { queryByTestId } = render(
      <Project
        githubSlug="/TestUser/test"
        image={<img alt="A test image." src={null} />}
        liveUrl="https://testdomain.com"
        name="Test project"
      >
        <div data-testid="child" />
      </Project>
    );
    expect(queryByTestId('child')).toBeInTheDocument();
  });

  test('Renders the project name.', () => {
    const { queryByText } = render(
      <Project
        githubSlug="/TestUser/test"
        image={<img alt="A test image." src={null} />}
        liveUrl="https://testdomain.com"
        name="Test project"
      >
        <div data-testid="child" />
      </Project>
    );
    expect(queryByText('Test project')).toBeInTheDocument();
  });

  test('Renders the project image.', () => {
    const { queryByAltText } = render(
      <Project
        githubSlug="/TestUser/test"
        image={<img alt="A test image." src={null} />}
        liveUrl="https://testdomain.com"
        name="Test project"
      >
        <div data-testid="child" />
      </Project>
    );
    expect(queryByAltText('A test image.')).toBeInTheDocument();
  });

  test('Renders an external link to the GitHub repository.', () => {
    const { queryByText } = render(
      <Project
        githubSlug="/TestUser/test"
        image={<img alt="A test image." src={null} />}
        liveUrl="https://testdomain.com"
        name="Test project"
      >
        <div data-testid="child" />
      </Project>
    );
    const githubRespositoryLink = queryByText('Visit GitHub repository');
    expect(githubRespositoryLink).toHaveAttribute(
      'href',
      'https://github.com/TestUser/test'
    );
    expect(githubRespositoryLink).toHaveAttribute('target', '_blank');
    expect(githubRespositoryLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('Renders an external link to the live project.', () => {
    const { queryByText } = render(
      <Project
        githubSlug="/TestUser/test"
        image={<img alt="A test image." src={null} />}
        liveUrl="https://testdomain.com"
        name="Test project"
      >
        <div data-testid="child" />
      </Project>
    );
    const liveProjectLink = queryByText('Visit live project');
    expect(liveProjectLink).toHaveAttribute('href', 'https://testdomain.com');
    expect(liveProjectLink).toHaveAttribute('target', '_blank');
    expect(liveProjectLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
