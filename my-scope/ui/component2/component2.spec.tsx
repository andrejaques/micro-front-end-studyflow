import React from 'react';
import { render } from '@testing-library/react';
import { BasicComponent2 } from './component2.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicComponent2 />);
  const rendered = getByText('hello from Component2');
  expect(rendered).toBeTruthy();
});
