import { useEffect, useState } from 'react'

export const useClickOutSide = (ref, callback, event = 'click') => {
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback && callback();
      }
    }
    window.addEventListener(event, handler)
    return () => {
      window.removeEventListener(event, handler);
    }
  }, [ref])
}

export const useForceUpdate = () => {
  const [, dispatch] = useState(Object.create(null))
  return () => {
    dispatch(Object.create(null))
  }
}
