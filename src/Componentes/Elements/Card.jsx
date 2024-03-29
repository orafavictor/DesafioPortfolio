import Button2 from './Button2'
import styles from './Card.module.css'

function Card({img, title, description, repo}){
    return(
        <div className={styles.Card}>
            <a>
                <img src={img} alt='ERRO'/>
           </a>
            <section>
            <h1> {title} </h1>
            <p>{description}</p>
            <Button2 text='Acesse o repositório' link={repo}/>
            </section>
        </div>
    )
}

export default Card