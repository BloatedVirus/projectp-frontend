import React from 'react'
import sample from '../assets/video/chiro.mp4'
const Header = () => {
  return (
    <header>
        <h1><span class="light">Chiro Popov Bouwt aan</span><br/>nieuwe lokalen</h1>
<section id="section07" class="demo">
  <a href="#section08"><span></span><span></span><span></span></a>
  <video className='videoTag'  autoPlay loop muted="true" src={sample}></video>
</section>
    </header>
  )
}

export default Header