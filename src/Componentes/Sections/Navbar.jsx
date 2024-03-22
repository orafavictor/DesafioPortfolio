import styles from './Navbar.module.css'

function Navbar(){
    return (
        <div className={styles.Navbar}>
            <ul>
            <li><a href='#AboutMe'> Sobre mim </a></li>
            <li><a href='#Projects'> Projetos </a></li>
            <li><a href='#Contacts'> Contatos </a></li>
            </ul>
        </div>
    )
}

export default Navbar






{/* <li><strong> Sobre Mim </strong></li>
<li><strong> Projetos </strong></li>
<li><strong> Contatos </strong></li> */}