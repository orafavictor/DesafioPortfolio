import styles from './Footer.module.css'
import Git from '../../Image/Media/Git.svg'
import Insta from '../../Image/Media/Insta.svg'
import LK from '../../Image/Media/LK.svg'

function Footer(){
    return (
        <div className={styles.Footer} id="Contacts">
            <ul>
                <li> <a href='https://www.instagram.com/orafavictor/' target='_blank' ><img src={Insta}/></a></li>
                <li> <a href='https://github.com/orafavictor' target='_blank'><img src={Git}/></a></li>
                <li> <a href='https://www.linkedin.com/in/orafavictor/' target='_blank'><img src={LK}/></a></li>
            </ul>
            <p> orafavictor@gmail.com | Rafael Victor © 2024 </p> 
        </div>
    )
}

export default Footer