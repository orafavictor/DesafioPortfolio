import styles from './Card.module.css'

function Card({img, title, description}){
    return(
        <div className={styles.Card}>
            <a>
                <img src={img} alt='ERRO'/>
           </a>
            <section>
            <h1> {title} </h1>
            <p>{description}</p>
            </section>
        </div>
    )
}

export default Card