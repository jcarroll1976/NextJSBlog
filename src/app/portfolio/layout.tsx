import React from 'react'
import "./Portfolio.css"

type Props = {
    children: React.ReactNode
}

function Layout({children}: Props) {
  return (
    <div>
        <h1 className='portfolio-mainTitle'>Our Work</h1>
        {children}
    </div>
  )
}

export default Layout