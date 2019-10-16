import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup, render } from '@testing-library/react';

import CopyrightWidget from './index';

afterEach(cleanup);

describe('<CopyrightWidget holder={string} initialYear={number} />', () => {
  test('Renders "© {holder} {initialYear}" when current year is not past initialYear.', () => {
    Date.prototype.getFullYear = () => 2019;
    const { getByText } = render(
      <CopyrightWidget holder="foo" initialYear={2019} />
    );
    expect(getByText('© foo 2019')).toBeInTheDocument();
  });

  test('Renders "© {holder} {initialYear}–{currentYear}" when current year is past initialYear.', () => {
    Date.prototype.getFullYear = () => 2020;
    const { getByText } = render(
      <CopyrightWidget holder="foo" initialYear={2019} />
    );
    expect(getByText('© foo 2019–2020')).toBeInTheDocument();
  });
});
