import Link from 'next/link'
import React from 'react'

type Props = {}

function Portfolio({}: Props) {
  return (
    <div className='portfolio-container'>
      <h1 className='portfolio-title'>Choose a gallery</h1>
      <div className='portfolio-items'>
        <Link className='portfolio-item' href="/portfolio/illustrations">
          <span className='portfolioItem-title'>Illustrations</span>
        </Link>
        <Link className='portfolio-item' href="/portfolio/websites">
          <span className='portfolioItem-title'>Websites</span>
        </Link>
        <Link className='portfolio-item' href="/portfolio/applications">
          <span className='portfolioItem-title'>Applications</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio