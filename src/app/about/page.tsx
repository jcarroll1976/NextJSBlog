import Image from 'next/image'
import React from 'react'
import Button from '../components/Button'
import "./about.css"

type Props = {}

function About({}: Props) {
  return (
    <div className='about-container'>
      <div className='aboutImage-container'>
        <Image
        src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        fill={true}
        alt=""
        className="about-image"
        />
        <div className='about-image-text'>
          <h1 className='about-image-title'>Digital Storytellers</h1>
          <h2 className='about-image-description'>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className='aboutText-container'>
        <div className='aboutText-item'>
          <h1 className='aboutText-title'>Who are We?</h1>
          <p className='aboutText-description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className='aboutText-item'>
        <h1 className='aboutText-title'>What do We do?</h1>
          <p className='aboutText-description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  )
}

export default About