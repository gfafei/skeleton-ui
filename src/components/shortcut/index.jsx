import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Shortcut = (props) => {
  const { children, keymap, global, stopPropagation } = props;
  const target = React.Children.only(children);
  const keymapRef = React.useRef(keymap);
  const needBindEvent = Object.keys(keymap).length && !global;
  React.useEffect(() => {
    keymapRef.current = keymap;
  }, [keymap])
  useEffect(() => {
    if (!global) return
    const handler = (e) => {
      const k = e.key;
      const cb = keymapRef.current[k];
      cb && cb(e);
    }
    window.addEventListener('keydown', handler)
    return () => {
      window.removeEventListener('keydown', handler)
    }
  }, [])

  const handleKeydown = (e) => {
    if (global) return;
    const k = e.key;
    const cb = keymap[k];
    cb && cb(e);
    if (stopPropagation) {
      e.stopPropagation();
    }
  }
  return (
    <>
      {
        needBindEvent ?
          React.cloneElement(target, {
            onKeyDown: handleKeydown
          }) :
          target
      }
    </>
  )
}

Shortcut.propTypes = {
  children: PropTypes.node,
  global: PropTypes.bool,
  stopPropagation: PropTypes.bool,
  keymap: PropTypes.object,
}

Shortcut.defaultProps = {
  global: true,
  stopPropagation: true,
  keymap: {}
}

export default Shortcut;
