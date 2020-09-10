import React from 'react'
import Button from './index'

const ButtonDemo = () => {
  return (
    <>
      <div>Contained</div>
      <Button>Primary</Button>
      <Button>Default</Button>
      <Button>Disable</Button>
      <Button>Danger</Button>

      <div>Size</div>
      <Button>Normal</Button>
      <Button>Small</Button>
      <Button>Large</Button>

      <div>Text</div>
      <Button>Default</Button>
      <Button>Primary</Button>
      <Button>Disable</Button>
      <Button>Danger</Button>

      <div>Outlined</div>
      <Button>Primary</Button>
      <Button>Default</Button>
      <Button>Disable</Button>
      <Button>Danger</Button>
    </>
  )
}

export default ButtonDemo
