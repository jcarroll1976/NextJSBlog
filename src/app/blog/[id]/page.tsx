import Image from 'next/image'
import React from 'react'

type Props = {}

function BlogPost({}: Props) {
  return (
    <div className='blogPost-container'>
      <div className='blogPost-top'>
        <div className='blogPost-info'>
          <h1 className='blogPost-title'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, eos.
          </h1>
          <p className='blogPost-description'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam iste atque 
            distinctio nihil deleniti ut omnis alias voluptatibus necessitatibus rerum 
            officiis, quos exercitationem modi assumenda commodi veritatis dignissimos 
            suscipit praesentium, quisquam nemo quibusdam odit culpa quasi beatae? 
            Iusto, voluptates dignissimos.
          </p>
          <div className='blogPost-author'>
            <Image
            src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            width={40}
            height={40}
            className='blogPost-avatar'
            />
            <span className="blogPost-username">John Doe</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPost