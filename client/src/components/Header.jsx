import React from 'react'
import sample from '../assets/video/chiro.mp4'
const Header = () => {
  return (
    <header>
        <h1><span class="light">Chiro Popov Bouwt aan</span><br/>nieuwe lokalen</h1>
        <video className='videoTag' autoPlay loop muted>
    <source src={sample} type='video/mp4' />
</video>
    </header>
  )
}

export default Header