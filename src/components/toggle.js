import "./ToggleStyle.css"

import React from 'react'

const toggle = () => {
  return (
    <div>
        {/* <label className="switch">
  <input type="checkbox" checked/>
  <span className="slider round"></span>
</label> */}
<label className="switch">
  <input type="checkbox" />
  <span className="slider round"></span>
</label>
    </div>
  )
}

export default toggle