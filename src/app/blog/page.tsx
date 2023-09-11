import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import "./Blog.css"

type Props = {}

function Blog({}: Props) {
  return (
    <div className='blog-container'>
      <Link href="/testId" className='container'>
        <div className='blog-imageContainer'>
          <Image
          src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
          width={400}
          height={250}
          className='blog-image'
          />
          <div className='blog-content'>
          <h1 className='blog-title'>Test</h1>
          <p className="blog-description">Description</p>
        </div>
        </div>
      </Link>
      <Link href="/testId" className='container'>
        <div className='blog-imageContainer'>
          <Image
          src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
          width={400}
          height={250}
          className='blog-image'
          />
          <div className='blog-content'>
          <h1 className='blog-title'>Test</h1>
          <p className="blog-description">Description</p>
        </div>
        </div>
      </Link>
      <Link href="/testId" className='container'>
        <div className='blog-imageContainer'>
          <Image
          src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
          width={400}
          height={250}
          className='blog-image'
          />
          <div className='blog-content'>
          <h1 className='blog-title'>Test</h1>
          <p className="blog-description">Description</p>
        </div>
        </div>
      </Link>
    </div>
  )
}

export default Blog