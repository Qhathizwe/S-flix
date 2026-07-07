import React from 'react'
import styles from './HeroContent.module.css'
import NextArrow from '../Hero/Hero-assets/next-button.png';
import PrevArrow from '../Hero/Hero-assets/back.png';
import PlayButton from '../Hero/Hero-assets/play-button-icon-png-18904.png';




const HeroContent = () => {
  return (
   
    <div className={styles.HeroContent}>
        <pre>
        <h2 style={{fontFamily: 'Arial, sans-serif', fontSize: '24px', marginTop: '220px'}}>NETFLIX ENTERTAINMENTS STUDIO'S PRESENTS</h2>
          <br /> 
        <h3 style={{color:'green', fontWeight: 'bolder', fontFamily: 'sans-serif', fontSize:'25px'}}>Sue Nyathi</h3>
        <h1 style={{fontFamily: 'VBrush Script MT', fontSize: '46px'}}>THE POLYGAMIST</h1> 
        <br /> 
        <br /> 
        <br /> 
        <h3 style={{fontWeight: 'bolder', fontFamily: 'sans-serif', fontSize:'25px'}}> 2026 . 1 Season 22 Episodes . Multi Language . Drama </h3>
        <br /> 
        <div className={styles.Description_playBtn}>
        <p style={{fontFamily: 'Courier New', fontSize:'20px'}} >
           The Polygamist is a South African drama series with strong elements <br /> 
           of a telenovela, melodrama, and romantic thriller. Adapted from Sue <br /> 
           Nyathi's acclaimed novel, the TV-MA show explores themes of betrayal, <br /> 
           patriarchal power, and consequence by following the tangled, <br /> 
           secretive love life of a wealthy Johannesburg businessman.</p>

        {/* <div className={styles.PlayButton}> */}
        <img src={PlayButton} alt='Play-button' style={{width: '150px', height: '120px', cursor: 'pointer', border: '4px solid red', borderRadius: '1200px' }} />
        {/* </div> */}
        </div>
       

        </pre>
        <br />
        <br />
        <div>
          <img src={PrevArrow} alt='Prev-arrow' style={{width: '60px', height: '60px', cursor: 'pointer',}} />
          <img src={NextArrow} alt='Next-arrow' style={{width: '55px', height: '55px', cursor: 'pointer',}} />

        </div>
        
    </div>
  )
}

export default HeroContent
