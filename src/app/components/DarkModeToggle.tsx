import React from 'react'
import "./DarkModeToggle.css"

type Props = {}

function DarkModeToggle({}: Props) {
  return (
    <div className="toggle-container">
        <div className='toggle-icon'>🌙</div>
        <div className='toggle-icon'>🔆</div>
        <div className='toggle-ball'></div>
    </div>
  )
}

export default DarkModeToggle