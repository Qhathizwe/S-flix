
import styles from './Footer.module.css'
import email_icon from '../../components/footer/footer assets/email-5-24.png'
import phone_icon from '../../components/footer/footer assets/phone-24.png'
import facebook_icon from '../../components/footer/footer assets/facebook-3-24.png'
import instagram_icon from '../../components/footer/footer assets/instagram-3-24.png'
import twitter_icon from '../../components/footer/footer assets/twitter-2-24.png'
import youtube_icon from '../../components/footer/footer assets/youtube-3-24.png'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div >
        <h2 className={styles.logo}><span className={styles.s_logo}>S-</span>flix</h2> <br /> <br/>
        <div className={styles.contacts}>
            <span className={styles.email}><img src={email_icon}/> <h3>sphoswa2@gmail.com</h3></span> <br /> <br/>
            <span className={styles.phone}><img src={phone_icon}/> <h3>0699342225</h3></span>
        </div>
      </div>

      
      <div className={styles.company}>
        <h2>Company</h2>
        <br />
        <a>About Us</a> <br />
        <br />
        <a>Privacy Policy</a> <br />
        <br />
        <a>Contact Us</a> <br />
      </div>

      <div className={styles.PremiumMovies}>
        <h2>Premium Movies</h2>
        <br />
        <a>The Wife</a> <br />
        <br />
        <a>Premal</a> <br />
        <br />
        <a>Dead Evil</a>
      </div>

      <div className={styles.Quick_links}>
        <h2>Quick Links</h2>
        <br />
        <a>Terms of Use</a><br />
        <br />
        <a>Error</a><br />
        <br />
        <a>Share of Feedback</a>
      </div>

      <div className={styles.FollowUs}>
        <h2>Follow Us</h2> <br />
        <span className={styles.Socials }>
            <img src={facebook_icon}/>
            <img src= {twitter_icon}/>
            <img src = {instagram_icon}/>
            <img src = {youtube_icon}/>
        </span>
      </div>
    </div>
  )
}

export default Footer
