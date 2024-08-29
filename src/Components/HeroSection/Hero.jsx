import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img1.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume from '../../assets/resume.pdf'

function downloadPDF() {
  const link = document.createElement('a');
  link.href = resume;
  link.setAttribute('download', 'resume.pdf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function Hero() {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt=""/>
        <h1><span className='hero-span'>I am Yogendra Yadav,</span> frontend developer based in India.</h1>
        <p>I am a frontend developer in Ghaziabad. I have experience of 1 year working at Indibus.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div onClick={downloadPDF} className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero