import React from 'react'
import './Footer.css'
import Image from 'next/image'

type Props = {}

function Footer({}: Props) {
  return (
    <div className='footer-container'>
        <div>&copy;2023 Daily Blogs. All Rights Reserved.</div>
        <div className='footer-social'>
            <Image src="/1.png" alt="Daily Blogs Facebook" width={15} height={15} className='footer-icon' />
            <Image src="/2.png" alt="Daily Blogs Instagram" width={15} height={15} className='footer-icon' />
            <Image src="/3.png" alt="Daily Blogs Twitter" width={15} height={15} className='footer-icon' />
            <Image src="/4.png" alt="Daily Blogs YouTube" width={15} height={15} className='footer-icon' />
        </div>
    </div>
  )
}

export default Footer