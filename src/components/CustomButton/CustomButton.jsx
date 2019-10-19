import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const CustomButton = ({
  children,
  handleClick,
  buttonType,
  buttonDisabled,
}) => (
  <Container type={buttonType} disabled={buttonDisabled} onClick={handleClick}>
    {children}
  </Container>
);

CustomButton.propTypes = {
  buttonType: PropTypes.oneOf(['button', 'reset', 'submit']),
};

CustomButton.defaultProps = {
  buttonType: 'button',
};

export default CustomButton;
