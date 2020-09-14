import ReactDOM from 'react-dom';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.less';
import basePropTypes from '../basePropTypes'

const ARROW_SIZE = 10;
const OFFSET = 3;

const Popper = (props) => {
  const {
    children,
    anchor,
    placement,
    offset,
    className,
    open,
    hasArrow,
    delay,
    ...rest
  } = props;
  const ref = React.useRef(null);
  const arrowRef = React.useRef(null);
  const timerRef = React.useRef(0)
  const getElementPosition = (ele) => {
    const rect = anchor.getBoundingClientRect();
    const eleRect = ele.getBoundingClientRect();
    let pos;
    switch (placement) {
      case 'top':
        pos = {
          top: rect.top - eleRect.height - OFFSET - (hasArrow ? ARROW_SIZE : 0),
          left: rect.left + (rect.width - eleRect.width) / 2
        }
        break
      case 'bottom':
        pos = {
          top: rect.bottom + OFFSET + ( hasArrow ? ARROW_SIZE : 0 ),
          left: rect.left + (rect.width - eleRect.width) / 2
        }
        break
      case 'left':
        pos = {
          top: rect.top + (rect.height - eleRect.height) / 2,
          left: rect.left - eleRect.width - OFFSET - (hasArrow ? ARROW_SIZE : 0)
        }
        break
      case 'right':
        pos = {
          top: rect.top + (rect.height - eleRect.height) / 2,
          left: rect.right + OFFSET + (hasArrow ? ARROW_SIZE : 0)
        }
        break
      default:
        pos = {};
    }
    if (pos.left + eleRect.width + OFFSET > window.innerWidth) {
      pos.left = window.innerWidth - eleRect.width - OFFSET;
    }
    return pos;
  }

  const getArrowPosition = (ele, pos) => {
    const rect = anchor.getBoundingClientRect();
    const eleRect = ele.getBoundingClientRect();
    switch(placement) {
      case 'top':
        return {
          top: eleRect.height - ARROW_SIZE / 2,
          left: rect.left + rect.width / 2 - pos.left - ARROW_SIZE / 2
        }
      case 'bottom':
        return {
          top: -1 * ARROW_SIZE / 2,
          left: rect.left + rect.width / 2 - pos.left - ARROW_SIZE / 2
        }
      case 'left':
        return {
          top: (eleRect.height - ARROW_SIZE) / 2,
          left: eleRect.width - ARROW_SIZE / 2
        }
      case 'right':
        return {
          top: (eleRect.height - ARROW_SIZE) / 2,
          left: -1 * ARROW_SIZE / 2
        }
      default:
        return {};
    }
  }

  const setPosition = () => {
    /**
     * @type {HTMLElement}
     */
    const target = ref.current;
    if (!target) return;
    const pos = getElementPosition(target)
    target.style.top = `${pos.top}px`;
    target.style.left = `${pos.left}px`;
    /**
     * @type {HTMLElement}
     */
    const arrow = arrowRef.current;
    if (!arrow) return;
    const arrowPos = getArrowPosition(target, pos);
    arrow.style.top = `${arrowPos.top}px`;
    arrow.style.left = `${arrowPos.left}px`;
  }

  React.useEffect(() => {
    if (open && anchor) {
      if (!timerRef.current) {
        timerRef.current = setTimeout(() => {
          setPosition()
          timerRef.current = 0
        }, delay)
      }
    }
  })

  if (!open) {
    return null;
  }
  return (
    ReactDOM.createPortal(
      <div style={{top: -1000}} ref={ref} className={classNames('ui-popper', className)} {...rest} >
        {children}
        {
          hasArrow && <div ref={arrowRef} className={classNames('arrow', placement)}/>
        }
      </div>,
      document.body
    )
  )
}

Popper.propTypes = {
  open: PropTypes.bool,
  hasArrow: PropTypes.bool,
  placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  delay: PropTypes.number,
  anchor: PropTypes.instanceOf(HTMLElement),
  ...basePropTypes
}
Popper.defaultProps = {
  open: false,
  hasArrow: false,
  placement: 'bottom',
  delay: 0,
}
export default Popper;

