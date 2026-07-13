import American_fiction from '../../assets/movies/Latest Realease/American-fiction.jpeg'
import A_Quiet_place from '../../assets/movies/Latest Realease/A quiet place.jpg'
import jurassic_park from '../../assets/movies/Latest Realease/jurassic-park.jpg'
import the_creator from '../../assets/movies/Latest Realease/the-creater.jpg'
import Mission_Impossible from '../../assets/movies/Latest Realease/Mission_Impossible.jpg'

import lucy from '../../assets/movies/Top Trending/lucy.jpg'
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
      <h1 className={styles.LR_Topic}>Latest <br /> Releases</h1>

      <div className={styles.LR_pics}>
        <img src={American_fiction}  />
        <img src={A_Quiet_place} />
        <img src={jurassic_park}  />
        <img src= {the_creator} />
        <img src={Mission_Impossible}  />
      </div>
     </section>

     <section className={styles.TT_Content}>
        <h1 className={styles.TT_Topic}>Top <br /> Trending</h1>

        <div className={styles.TT_pics}>
          <img src={lucy} />
          <img src={moana} />
          <img src={minions} />
          <img src={pussIn_boots} />
          <img src={scream} />
        </div>
     </section>

     <section className={styles.SG_Content}>
          <h1 className={styles.SG_Topic}>Top <br />Trending</h1>
    <div className={styles.SG_pics}>
        <h2 className={styles.romantic}>ROMANTIC</h2>
        <h2 className={styles.romanticComedy}>Romentic <br /> Comedy</h2>
        <h2 className={styles.thriller}>THRILLER</h2>
        <h2 className={styles.comedy}>COMEDY</h2>
        <h2 className={styles.adventure}>ADVENTURE</h2>
        </div>
     </section>
   </div>
   </>
  )
}

export default MainContent