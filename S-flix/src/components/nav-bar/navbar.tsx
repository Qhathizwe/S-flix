import React from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
   <nav>
    <div className={styles.navbar}>

        <div className={styles.left}>
        <span className={styles['ham-menu']}>☰</span>
        <h2 className={styles.logo}>
            <span className={styles['logo-S']}>S-</span>flix
        </h2>
        </div>

        <div className={styles.right}>
        <span className={styles['search-bar']}>
            <img src='S-flix/src/components/nav-bar/nav-assets/icons8-search-50.apng.png' alt='Search' />
        </span>
        <button className={styles.subscribe}>Subscribe</button>
        </div>
        </div>
   </nav>
  )
}

export default Navbar
