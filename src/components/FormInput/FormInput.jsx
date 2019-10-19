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
  name,
  rows,
}) => (
  <Container>
    <label htmlFor={id} className="label">
      {label}
      {(variant === 'input' && (
        <Input
          id={id}
          type={type}
          onChange={handleChange}
          onBlur={handleBlur}
          value={inputValue}
          name={name}
          placeholder={inputPlaceholder}
        />
      )) ||
        (variant === 'textarea' && (
          <TextArea
            rows={rows}
            id={id}
            type={type}
            onChange={handleChange}
            onBlur={handleBlur}
            value={inputValue}
            name={name}
            placeholder={inputPlaceholder}
          />
        ))}
    </label>
  </Container>
);

export default FormInput;
