import React from 'react'
import styles from './latestRelease.module.css'
import American_fiction from '../../../assets/movies/Latest Realease/American-fiction.jpeg'
import A_Quiet_place from '../../../assets/movies/Latest Realease/A quiet place.jpg'
import jurassic_park from '../../../assets/movies/Latest Realease/jurassic-park.jpg'
import the_creator from '../../../assets/movies/Latest Realease/the-creater.jpg'
import the_dark_knight from '../../../assets/movies/Latest Realease/the-dark-knight.jpg'
import { ContentContainer } from '../Content&Pics_Container/ContentContainer'
import { PicsContainer } from '../Content&Pics_Container/PicsContainer'

export const LatestRelease = () => {
  return (
    <div className={styles.LR_Container}>
    <ContentContainer>
        <h1 className={styles.LR_Content}>Latest <br /> Releases</h1>
    </ContentContainer>

    <PicsContainer>
    <img src={American_fiction}  />  
    <img src={A_Quiet_place} />
    <img src={jurassic_park}  />
    <img src= {the_creator} />
    <img src={the_dark_knight}  />
    </PicsContainer>
    

    </div>
  )
}
export default LatestRelease