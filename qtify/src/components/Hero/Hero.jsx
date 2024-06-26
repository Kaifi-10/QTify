import React from 'react'
import styles from './Hero.module.css'
import heroImg from '../../assets/hero_headphones.png'

function Hero() {
  return (
    <div className={styles.hero}>
        <p>
        100 Thousand Songs, ad-free <br/>
        Over thousands podcast episodes
        </p>
        <img src={heroImg} alt='hero-imaage'/>
        
    </div>
  )
}

export default Hero