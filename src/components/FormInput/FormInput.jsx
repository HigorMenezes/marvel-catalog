import React from 'react';

import { Container, Input, TextArea } from './styles';

const FormInput = ({
  variant,
  id,
  label,
  type,
  handleChange,
  handleBlur,
  inputValue,
  inputPlaceholder,
  inputDisabled,
  name,
  errorMessage,
  rows,
}) => (
  <Container>
    <label htmlFor={id} className="label">
      {label}
      {(variant === 'input' && (
        <>
          <Input
            id={id}
            type={type}
            onChange={handleChange}
            onBlur={handleBlur}
            value={inputValue}
            name={name}
            disabled={inputDisabled}
            placeholder={inputPlaceholder}
            className={errorMessage && 'input-error'}
          />
          {errorMessage && (
            <span className="error-message">{errorMessage}</span>
          )}
        </>
      )) ||
        (variant === 'textarea' && (
          <>
            <TextArea
              rows={rows}
              id={id}
              type={type}
              onChange={handleChange}
              onBlur={handleBlur}
              value={inputValue}
              name={name}
              disabled={inputDisabled}
              placeholder={inputPlaceholder}
              className={errorMessage && 'input-error'}
            />
            {errorMessage && (
              <span className="error-message">{errorMessage}</span>
            )}
          </>
        ))}
    </label>
  </Container>
);

export default FormInput;
