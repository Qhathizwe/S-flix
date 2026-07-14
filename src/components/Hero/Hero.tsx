
import styles from './Hero.module.css'
import searchIcon from './Hero-assets/search-icon.png';
import The_Polygamist from './Hero-assets/the_polygamist.png';
import HeroContent from './HeroContent';


const Hero = () => {
  return (

    <section className={styles.HeroContainer}>
      <div className={styles.HeroImage} style={{backgroundImage: `url(${The_Polygamist})`}}>
        <nav>
        <div className={styles.content}>
        <span className={styles['ham-menu']}>☰</span>
        <h2 className={styles.logo}>
        <span className={styles['logo-S']}>S-</span>flix.</h2>
          <div className={styles['search-btn']}>
          <span className={styles['search-bar']}>
              <img src={searchIcon} alt='Search-icon' />
          </span>
          <button className={styles.subscribe}>Subscribe</button>
        </div>
        </div>
        </nav>
        <HeroContent />
      </div>
    
    </ section>
  
  )
}

export default Hero
