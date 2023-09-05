import React from 'react'
import "./Contact.css"
import Image from 'next/image'
import Button from '../components/Button'

type Props = {}

function Contact({}: Props) {
  return (
    <div className='contact-container'>
      <h1 className='contact-title'>Let's Keep in Touch</h1>
      <div className='contact-content'>
        <div className='contact-imgContainer'>
          <Image
          src="/contact.png"
          alt=""
          fill={true}
          className="contact-image"
          />
        </div>
        <form className='contact-form'>
          <input type='text' placeholder='name' className='contact-input' />
          <input type="email" placeholder='email' className='contact-input' />
          <textarea
          className='contact-textarea'
          placeholder='Enter your message'
          cols={30}
          rows={10}
          >
          </textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  )
}

export default Contact