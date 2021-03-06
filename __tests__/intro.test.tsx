import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Intro from '@components/Intro';

afterEach(cleanup);

test('intro component has correct text + renders correctly', () => {
  const { getByTestId } = render(<Intro />);
  const paragraph = getByTestId('intro');
  expect(paragraph.textContent).toEqual(
    "I'm passionate about solving technical problems and coming up with creative solutions.I enjoy working with the JAMstack, React, Node, testing technologies + practices & various dev-ops technologies"
  );
});
