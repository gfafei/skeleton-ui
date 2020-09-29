import React from 'react'
import propTypes from 'prop-types'
import clsx from 'clsx'
import * as _ from 'lodash'
import './button.less'

const Button = (props) => {
  const {
    className,
    disabled,
    onClick,
    children,
    fullwidth,
    variant,
    ...rest
  } = props
  return (
    <button
      disabled={disabled}
      className={clsx('ui-button', className, {
        'ui-disabled': disabled,
        'ui-fullwidth': fullwidth
      })}
      {...rest}
    >
      {children}
    </button>
  )
}
Button.propTypes = {
  onClick: propTypes.func,
  disabled: propTypes.bool,
  fullwidth: propTypes.bool,
  variant: propTypes.oneOf(['contained', 'text', 'outlined'])
}
Button.defaultProps = {
  onClick: _.noop,
  disabled: false,
  fullwidth: false,
  variant: 'contained'
}
export default Button
