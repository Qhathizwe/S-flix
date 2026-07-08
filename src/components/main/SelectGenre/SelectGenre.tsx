import React from 'react'
import { ContentContainer } from '../Content&Pics_Container/ContentContainer'
import styles from './SelectGenre.module.css'

export const SelectGenre = () => {
  return (
    <>
    <div className={styles.SelectGenre}>
        <ContentContainer>
            <h1>Select <br/> Genre</h1>
        </ContentContainer>
    
    <div className={styles.Genres}>
        <h2 className={styles.romantic}>ROMANTIC</h2>
        <h2 className={styles.romanticComedy}>Romentic <br /> Comedy</h2>
        <h2 className={styles.thriller}>THRILLER</h2>
        <h2 className={styles.comedy}>COMEDY</h2>
        <h2 className={styles.adventure}>ADVENTURE</h2>
    </div>
    </div>
    </>
  )
}

export default SelectGenre