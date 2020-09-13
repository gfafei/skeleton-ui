import React from 'react'
import propTypes from 'prop-types'
import * as _ from '../../utils'

const Button = (props) => {
  const { onClick, disabled, children, ...rest } = props
  const handleClick = () => {
    if (disabled) return;
    onClick();
  }
  return (
    <button
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  onClick: _.noop,
  disabled: false
}

Button.propTypes = {
  onClick: propTypes.func,
  disabled: propTypes.bool
}
export default Button

