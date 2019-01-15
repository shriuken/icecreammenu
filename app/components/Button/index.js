/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class Button extends React.PureComponent {
  render() {
    const StyledButton = styled.button`
      background-color: ${this.props.positive ? '#4caf50' : 'red'};
      border-radius: 3px;
      color: white;
      padding: ${this.props.positive ? '15px 32px' : '4px 24px'};
      text-align: center;
      text-decoration: none;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
    `;
    return (
      <StyledButton positive={this.props.positive} onClick={this.props.onClick}>
        {this.props.text}
      </StyledButton>
    );
  }
}

Button.propTypes = {
  positive: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
