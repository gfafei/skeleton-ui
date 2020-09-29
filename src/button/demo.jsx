import React, { useState } from 'react'
import Button from './index'

const ButtonDemo = () => {
  const [state, setState] = useState({
    disabled: false,
    label: '确定',
    fullwidth: false
  })
  return (
    <div className="demo-container">
      <div className="demo-settings">
        <div className="demo-setting-row">
          <label>disabled</label>
          <input type="checkbox" checked={state.disabled}
                 onChange={e => setState({ ...state, disabled: e.target.checked })}/>
        </div>
      </div>
      <div className="demo-content">
        <Button
          disabled={state.disabled}
          fullwidth={state.fullwidth}
        >
          {state.label}
        </Button>
      </div>
    </div>
  )
}

export default ButtonDemo
