import styles from './Button2.module.css'

function Button2({text, link}){
    return(
        <div>
            <a href={link} target='_blank'>
            <button className={styles.btn}> {text} </button>
            </a>
        </div>
    )
}

export default Button2