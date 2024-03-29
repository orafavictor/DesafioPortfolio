import styles from './AboutMe.module.css'

function AboutMe(){
    return(
        <section className={styles.AboutMe} id="AboutMe">
            <h4>Sobre mim</h4>
            <div>
                <h1> Prazer, Rafael Victor! </h1>
                <p>
                    Sou um estudante de desenvolvimento full-stack <br/>
                    que busca uma migração de carreira. Aprendi <br/>
                    muito na carreira que trilhei até aqui, mas<br/>
                    sinto que seja a hora de ingressar em uma área <br/>
                    que me identico, de fato!<br/><br/>
                    Sou graduado em Gestão Financeira, falo inglês e<br/>
                    estudo francês. <br/> 
                </p>
            </div>
            <div>
            <h1> Habilidades aprendidas </h1>
                <p>
                    As habilidades que desenvolvi nessa jordada de <br/>
                    aprendizado e, que sei utilizá-las, são: HTML, <br/>
                    CSS, JavaScript, React e Figma.<br/><br/>
                    Sigo fortalecendo os conhecimentos nas <br/>
                    habilidades já aprendidas e buscando conhecimentos<br/>
                    em novas habilidades! 
                </p>
            </div>

        </section>
    )
}

export default AboutMe


