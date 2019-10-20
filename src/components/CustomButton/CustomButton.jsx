import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const CustomButton = ({
  children,
  handleClick,
  buttonType,
  buttonDisabled,
  className,
}) => (
  <Container
    data-testid="CustomButton"
    type={buttonType}
    disabled={buttonDisabled}
    onClick={handleClick}
    className={className}
  >
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
