import American_fiction from '../../assets/movies/Latest Realease/American-fiction.jpeg'
import A_Quiet_place from '../../assets/movies/Latest Realease/A quiet place.jpg'
import jurassic_park from '../../assets/movies/Latest Realease/jurassic-park.jpg'
import the_creator from '../../assets/movies/Latest Realease/the-creater.jpg'



import moana from '../../assets/movies/Top Trending/maona.jpg'
import minions from '../../assets/movies/Top Trending/minoins.webp'
import pussIn_boots from '../../assets/movies/Top Trending/puss-in-boots.webp'
import scream from '../../assets/movies/Top Trending/scream.jpg'
import styles from './MainContent.module.css'


export const MainContent = () => {
  return (
    <>
   <div className={styles.MainSection}>
     <section className={styles.LR_Content}>
      <h1 className={styles.LR_Topic}>LATEST <br /> RELEASES</h1>

      <div className={styles.LR_pics}>
        <img src={American_fiction} style={{width: '220px'}}  />
        <img src={A_Quiet_place} style={{width: '220px'}}/>
        <img src={jurassic_park}  style={{width: '220px'}}/>
        <img src= {the_creator} style={{width: '220px'}}/>
      </div>
     </section>

     <section className={styles.TT_Content}>
        <h1 className={styles.TT_Topic}>TOP <br /> TRENDING</h1>

        <div className={styles.TT_pics}>
          <img src={moana} style={{width: '220px'}}/>
          <img src={minions} style={{width: '220px'}}/>
          <img src={pussIn_boots} style={{width: '220px'}}/>
          <img src={scream} style={{width: '220px'}}/>
        </div>
     </section>

     <section className={styles.SG_Content}>
          <h1 className={styles.SG_Topic}>SELECT <br />GENRE</h1>
    <div className={styles.SG_pics}>
        <h2 className={styles.romantic}>ROMANTIC</h2>
        <h2 className={styles.romanticComedy}>Romentic <br /> Comedy</h2>
        <h2 className={styles.thriller}>THRILLER</h2>
        <h2 className={styles.adventure}>ADVENTURE</h2>
        </div>
     </section>
   </div>
   </>
  )
}

export default MainContent