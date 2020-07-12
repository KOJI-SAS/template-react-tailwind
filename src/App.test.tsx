import React from 'react';
import { render } from '@testing-library/react';

test('it render', () => {
  const { asFragment } = render(<div />);
  expect(asFragment()).toBeDefined();
});
