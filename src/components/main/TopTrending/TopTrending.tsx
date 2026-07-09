
import { ContentContainer } from '../Content&Pics_Container/ContentContainer'
import styles  from './TopTrending.module.css'
import { PicsContainer } from '../Content&Pics_Container/PicsContainer'
import lucy from '../../../assets/movies/Top Trending/lucy.jpg'
import moana from '../../../assets/movies/Top Trending/maona.jpg'
import minions from '../../../assets/movies/Top Trending/minoins.webp'
import pussIn_boots from '../../../assets/movies/Top Trending/puss-in-boots.webp'
import scream from '../../../assets/movies/Top Trending/scream.jpg'


export const TopTrending = () => {
  return (
    <div className={styles.TopTrending_Content}>
    <ContentContainer>
        <h1>Top <br />
        Trending</h1>
    </ContentContainer>
    
    <PicsContainer>
      <img src={lucy} />
      <img src={moana} />
      <img src={minions} />
      <img src={pussIn_boots} />
      <img src={scream} />
    </PicsContainer>
    
    </div>
  )
}
export default TopTrending 