import Image from 'next/image'
import './page.css'
import Hero from "public/hero.png"
import Button from './components/Button'

export default function Home() {
  return (
    <div className='home-container'>
      <div className='home-item'>
        <h1 className='home-title'>Better Design for your digital products.</h1>
        <p className='home-description'>Bringing your Ideas into Reality.We bring together the teams from 
          the global tech industry.
        </p>
        <Button url="/portfolio"text="View Our Work"/>
      </div>
      <div className='home-item'>
        <Image src={Hero} alt='' className='home-image' />
      </div>
    </div>
  )
}
