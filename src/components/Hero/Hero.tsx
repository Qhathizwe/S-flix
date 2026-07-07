import React from 'react';
import styles from './Hero.module.css'
import searchIcon from '../Hero/Hero-assets/search-icon.png';
import The_Polygamist from '../Hero/Hero-assets/The_Polygamist.png';
import HeroContent from './HeroContent';

const Hero = () => {
  return (
   <nav>
    <div className={styles.Hero}>
      <div style={{backgroundImage: `url(${The_Polygamist})`, backgroundSize: "cover", backgroundPosition: "center",
         width: "100%",
         height: "600px"
      }}>
        <div className={styles.content}>
        <span className={styles['ham-menu']}>☰</span>
        <h2 className={styles.logo}>
        <span className={styles['logo-S']}>S-</span>flix.</h2>
        <span className={styles['search-bar']}>
            <img src={searchIcon} alt='Search-icon' />
        </span>
        <button className={styles.subscribe}>Subscribe</button>
        </div>
      </div>

      <HeroContent />

    </div>
   </nav>
  )
}

export default Hero
