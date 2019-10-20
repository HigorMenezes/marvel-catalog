import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('Start project', () => {
  it('should render AppLayout', () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId('AppLayout')).not.toBeNull();
  });
});
