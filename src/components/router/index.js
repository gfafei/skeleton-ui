import React, { useEffect, useState } from 'react'

const Router = (props) => {
  const { path, children } = props
  const [visible, setVisible] = useState(location.hash === path)
  useEffect(() => {
    const handler = () => {
      console.log('visible', location.hash === path)
      setVisible(location.hash === path)
    }
    console.log('hashchange')
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
