import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup, render } from '@testing-library/react';

import Layout from './index';

afterEach(cleanup);

describe('<Layout>{children}</Layout>', () => {
  describe('Renders sectioning elements.', () => {
    const { getByTestId } = render(
      <Layout data-testid="target">
        <div />
      </Layout>
    );
    const layoutElement = getByTestId('target');
    test('Renders header element.', () => {
      expect(layoutElement).toContainHTML('<header');
    });
    test('Renders footer element.', () => {
      expect(layoutElement).toContainHTML('<footer');
    });
    test('Renders main element.', () => {
      expect(layoutElement).toContainHTML('<main');
    });
  });

  test('Renders passed children.', () => {
    const { getByTestId } = render(
      <Layout>
        <div data-testid="target" />
      </Layout>
    );
    expect(getByTestId('target')).toBeInTheDocument();
  });
});
