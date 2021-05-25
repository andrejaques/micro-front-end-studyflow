import React from 'react';
import { render } from '@testing-library/react';
import { BasicComponent1 } from './component1.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicComponent1 />);
  const rendered = getByText('hello from Component1');
  expect(rendered).toBeTruthy();
});
