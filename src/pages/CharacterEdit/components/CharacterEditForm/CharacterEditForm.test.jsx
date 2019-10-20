/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../styles';
import CharacterEditForm from './CharacterEditForm';

describe('CharacterEditForm test', () => {
  const data = {
    handleSubmit: () => {},
    handleChange: () => {},
    handleBlur: () => {},
    values: {
      name: 'name-test',
      description: 'description-test',
      thumbnail: 'thumbnail-test',
    },
    loading: false,
    touched: {},
    errors: {},
    submitWithSuccess: () => {},
  };

  it('should show edit form without errors', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CharacterEditForm {...data} />
      </ThemeProvider>
    );
    expect(getByTestId('CharacterEditForm').innerHTML).toMatch(
      data.values.name
    );
    expect(getByTestId('CharacterEditForm').innerHTML).toMatch(
      data.values.description
    );
    expect(getByTestId('CharacterEditForm').innerHTML).toMatch(
      data.values.thumbnail
    );
  });
});
