/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles';
import FormInput from './FormInput';

describe('FormInput test', () => {
  const data = {
    variant: 'input',
    id: 'id-test',
    label: 'label-test',
    type: 'text',
    handleChange: () => {},
    handleBlur: () => {},
    inputValue: 'input-value-test',
    inputPlaceholder: 'input-placeholder-test',
    inputDisabled: false,
    name: 'name-test',
    rows: 1,
  };

  it('should show render a input without error', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <FormInput {...data} />
      </ThemeProvider>
    );

    expect(
      getByTestId('FormInput').getElementsByTagName('input')
    ).not.toBeNull();
    expect(getByTestId('FormInput').innerHTML).toMatch(data.label);
    expect(getByTestId('FormInput').innerHTML).toMatch(data.id);
    expect(getByTestId('FormInput').innerHTML).toMatch(data.inputValue);
    expect(getByTestId('FormInput').innerHTML).toMatch(data.inputPlaceholder);
    expect(getByTestId('FormInput').innerHTML).toMatch(data.name);
  });

  it('should show render a input with error', () => {
    const newData = { ...data, errorMessage: 'error-test' };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <FormInput {...newData} />
      </ThemeProvider>
    );

    expect(
      getByTestId('FormInput').getElementsByTagName('input')
    ).not.toBeNull();
    expect(getByTestId('FormInput').innerHTML).toMatch(newData.label);
    expect(getByTestId('FormInput').innerHTML).toMatch(newData.id);
    expect(getByTestId('FormInput').innerHTML).toMatch(newData.inputValue);
    expect(getByTestId('FormInput').innerHTML).toMatch(
      newData.inputPlaceholder
    );
    expect(getByTestId('FormInput').innerHTML).toMatch(newData.name);

    expect(getByTestId('ErrorMessage').innerHTML).toMatch(newData.errorMessage);
  });

  it('should show render a textarea without error', () => {
    const newData = { ...data, variant: 'textarea' };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <FormInput {...newData} />
      </ThemeProvider>
    );

    expect(
      getByTestId('FormInput').getElementsByTagName('textarea')
    ).not.toBeNull();
    expect(getByTestId('FormInput').innerHTML).toMatch(newData.label);
    expect(getByTestId('FormInput').innerHTML).toMatch(newData.id);
    expect(getByTestId('FormInput').innerHTML).toMatch(newData.inputValue);
    expect(getByTestId('FormInput').innerHTML).toMatch(
      newData.inputPlaceholder
    );
    expect(getByTestId('FormInput').innerHTML).toMatch(newData.name);
  });

  it('should show render a textarea with error', () => {
    const newData = {
      ...data,
      variant: 'textarea',
      errorMessage: 'error-test',
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <FormInput {...newData} />
      </ThemeProvider>
    );

    expect(
      getByTestId('FormInput').getElementsByTagName('textarea')
    ).not.toBeNull();
    expect(getByTestId('FormInput').innerHTML).toMatch(newData.label);
    expect(getByTestId('FormInput').innerHTML).toMatch(newData.id);
    expect(getByTestId('FormInput').innerHTML).toMatch(newData.inputValue);
    expect(getByTestId('FormInput').innerHTML).toMatch(
      newData.inputPlaceholder
    );
    expect(getByTestId('FormInput').innerHTML).toMatch(newData.name);

    expect(getByTestId('ErrorMessage').innerHTML).toMatch(newData.errorMessage);
  });
});
