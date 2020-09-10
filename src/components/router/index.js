import React, { useEffect, useState } from 'react'

const Router = (props) => {
  const { path, children } = props
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const handler = () => {
      setVisible(location.hash === path)
    }
    window.addEventListener('hashchange', handler)
    return () => {
      window.removeEventListener('hashchange', handler)
    }
  }, [])

  if (visible) {
    return children
  } else {
    return null
  }
}

export default Router
