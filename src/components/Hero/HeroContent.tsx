
import styles from './HeroContent.module.css'
import NextArrow from '../Hero/Hero-assets/next-button.png';
import PrevArrow from '../Hero/Hero-assets/back.png';
import PlayButton from '../Hero/Hero-assets/playIcon.png';




const HeroContent = () => {
  return (
   
    <div className={styles.HeroContent}>
    
        <div className={'title'}>
          <h2  className={styles.netflix}>NETFLIX ENTERTAINMENTS STUDIO'S PRESENTS</h2>
          <h3 className={styles.author}>Sue Nyathi</h3>
          <h1 className={styles.title}>THE POLYGAMIST</h1>
          <h3 className={styles.year}> 2026 . 1 Season 22 Episodes . Multi Language . Drama </h3>
        </div>
         
        <div className={styles.Description_playBtn} style={{width: '100%'}}>
        <p  className={styles.description}>
           The Polygamist is a South African drama series with strong elements <br /> 
           of a telenovela, melodrama, and romantic thriller. Adapted from Sue <br /> 
           Nyathi's acclaimed novel, the TV-MA show explores themes of betrayal, <br /> 
           patriarchal power, and consequence by following the tangled, <br /> 
           secretive love life of a wealthy Johannesburg businessman.</p>

        <div className={styles.PlayButton}>
        <img src={PlayButton} alt='Play-button' style={{width: '150px', height: '120px', cursor: 'pointer', }} />
        </div>
        <h1 className={styles.streaming}>STRE<span style={{backgroundColor: 'red'}}>AMING NOW    .</span></h1>
        </div>
        
        <div>
          <img src={PrevArrow} alt='Prev-arrow' style={{width: '60px', height: '60px', cursor: 'pointer',}} />
          <img src={NextArrow} alt='Next-arrow' style={{width: '55px', height: '55px', cursor: 'pointer',}} />

        </div>
        
    </div>
  )
}

export default HeroContent
